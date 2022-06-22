const AmazonCognitoIdentify = require('amazon-cognito-identity-js');
const jwt = require('jsonwebtoken');
const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const regText = /^[a-zA-Z\s]+$/;
const regAdress = /^[A-Za-z0-9\s]+$/g;
const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/;

const poolData = {
    UserPoolId : "us-east-1_A3Pxa5rZs", // Your user pool id here   
    ClientId : "4kore39drljf6vdr7ugrg16egv" // Your client id here
}

const userPool = new AmazonCognitoIdentify.CognitoUserPool(poolData);

exports.signIn = (req, res) => {
    let datos = req.body;
    let mensajeError = "";
    mensajeError = validarEmail(datos.email);
    mensajeError += validarPassword(datos.password); 

    mensajeError != "" ? res.send(JSON.stringify({IdToken: '', Message: mensajeError})) : apiCognitoSignIn(datos, res);
}

exports.signUp = (req, res) => {
    let datos = req.body;
    let mensajeError = "";
    mensajeError = validarEmail(datos.email);
    mensajeError += validarPassword(datos.password);
    mensajeError += validarText(datos.nombre);
    mensajeError += validarText(datos.apellido);
    mensajeError += validarAdress(datos.direccion);    
    
    mensajeError != "" ? res.status(400).send(JSON.stringify({IdToken: '',Message: mensajeError})) : apiCognitoSignUp(datos, res);
    
}

exports.forgotPassword = (req , res) => {
    try{
        let datos = req.body;

        let userData = {
            Username: datos.email,
            Pool: userPool
        };

        let cognitoUser = new AmazonCognitoIdentify.CognitoUser(userData);
        cognitoUser.forgotPassword({
            onSuccess: function(result) {
                console.log('call result: ' + result);
                return res.send(JSON.stringify({Message:"Fue enviado el codigo para el recupero de contraseña"}));
            },
            onFailure: function(err){
                console.log(err);
                return res.send(err);
            }

        });
    }catch(error){
        console.log(error);
        res.status(500).send(JSON.stringify({Message:"Hubo un error"}));
    }
}

exports.confirmNewPassword = (req , res) => {
    try{
        let datos = req.body;

        let userData = {
            Username: datos.email,
            Pool: userPool
        };

        console.log(datos);
    
        let cognitoUser = new AmazonCognitoIdentify.CognitoUser(userData);
        cognitoUser.confirmPassword(datos.codigo , datos.password , {
            onSuccess: function(result){
                console.log('call result: ' + result);
                return res.send(JSON.stringify({Message:"Contraseña restablecida"}));
    
            },
            onFailure: function(err){
                console.log(err);
                return res.send(err);
            }
        });
    }catch(error){
        console.log(error);
        res.status(500).send(JSON.stringify({Message:"Hubo un error"}));
    }
}

function apiCognitoSignUp(datos, res) {
    try {
        let attributeList = [];

        let dataName = {
            Name: 'name',
            Value: datos.nombre,
        };

        let dataAddress = {
            Name: 'address',
            Value: datos.direccion,
        };

        let dataFamilyName = {
            Name: 'family_name',
            Value: datos.apellido,
        };

        attributeList.push(dataName, dataAddress, dataFamilyName);

        userPool.signUp(datos.email, datos.password, attributeList, null,
            function (err) {
                if (err) {
                    switch(err.name){
                        case 'UsernameExistsException':
                            res.status(400).send(JSON.stringify({Message: 'El mail se encuentra en uso'}));
                            break;
                        default:
                            res.status(400).send(JSON.stringify({Message: 'Problemas con el servidor, intente nuevamente'}));
                            break;
                    }
                    
                    return;
                }
                res.send(JSON.stringify({Message: 'Te registraste correctamente, porfavor verifica tu correo'}));
            });

    } catch (error) {
        console.log(error);
        res.status(500).send(JSON.stringify({Message:"Hubo un error"}));
    }
}

function apiCognitoSignIn(req, res) {
    try {
        let datos = req;
        
        var authenticationDetails = new AmazonCognitoIdentify.AuthenticationDetails({
            Username: datos.email,
            Password: datos.password,
        });

        let userData = {
            Username: datos.email,
            Pool: userPool
        };

        var cognitoUser = new AmazonCognitoIdentify.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result){   
                res.send(JSON.stringify({IdToken: result.getIdToken().getJwtToken(), Email: datos.email}));
            },
            onFailure: function(err){
                res.send(JSON.stringify({Message: err.code + "." + err.message, IdToken: ''}));
            },
        })
    } catch (error) {
        res.status(500).send(JSON.stringify({Message:"Hubo un error"}));
    }
}

function validarEmail(email){
    let err = "";
    if(!(email.match(regEmail))){
        err = "\nEmail no valido.";
    }
    return err;
}

function validarPassword(password){
    let err = "";
    if(!(password.match(regPassword))){
        err = "\nContraseña no valida.";
    }
    return err;
}

function validarText(text){
    let err = "";
    if(!(text.match(regText))){
        err = "\nTexto no valido.";
    }
    return err;
}

function validarAdress(adress){""
    let err = "";
    if(!(adress.match(regAdress))){
        err = "\nDireccion no valida.";
    }
    return err;
}