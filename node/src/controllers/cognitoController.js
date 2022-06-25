"use strict";
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
global.fetch = require("node-fetch");
var AWS = require("@aws-sdk/client-s3");
const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const regText = /^[a-zA-Z\s]+$/;
const regAdress = /^[A-Za-z0-9\s]+$/g;
const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/;

const poolData = {
    UserPoolId : "us-east-1_A3Pxa5rZs", // Your user pool id here   
    ClientId : "4kore39drljf6vdr7ugrg16egv" // Your client id here
}
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

var controller = {
crearcuenta: (req, res) => {
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var email = req.body.email;
    var direccion = req.body.direccion;
    var password = req.body.password;

    var attributeList = [];
    attributeList.push(
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "nombre",
        Value: nombre,
      })
    );
    attributeList.push(
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "family_name",
        Value: apellido,
      })
    );
    attributeList.push(
        new AmazonCognitoIdentity.CognitoUserAttribute({
          Name: "address",
          Value: direccion,
        })
      );
    attributeList.push(
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "email",
        Value: email,
      })
    );

   /* function validarEmail(email){
        let err = "";
        if(!(email.match(regEmail))){
            err = "\nEmail no valido.";
        }
        return err;
    }
    */
    userPool.crearcuenta(email, password, attributeList, null, (err, result) => {

      if (err) {
        return res.status(404).send({
          status: "Error",
          message: "El usuario no se ha podido registrar" + err,
        });
      } else {
        var cognitoUsuario = result.usuario;
        return res.status(200).send({
          status: "Success",
          message:
            "El usuario " +
            cognitoUsuario.getUsername() +
            " se ha  podido registrar",
        });
      }
    });
  },
  /*confirmarRegistro: (req, res) => {
    var codigo = req.body.codigo;
    var username = req.body.username;
    var userData = {
      Username: username,
      Pool: userPool,
    };

    //validar que el username exista
    var user = new AmazonCognitoIdentity.CognitoUser(userData);

    user.confirmRegistration(codigo, true, (err, result) => {
      if (err) {
        return res.status(404).send({
          status: "Error",
          message: err,
        });
      } else {
        return res.status(200).send({
          status: "Success",
          message: "El registro se ha confirmado con exito!",
        });
      }
    });
  },*/

  /*resendCodeConfirmation: (req, res) => {
    var username = req.body.username;
    var userData = {
      Username: username,
      Pool: userPool,
    };
    var user = new AmazonCognitoIdentity.CognitoUser(userData);

    user.resendConfirmationCode((err, result) => {
      if (err) {
        return res.status(404).send({
          status: "Error",
          message: err,
        });
      } else {
        return res.status(200).send({
          status: "Success",
          message: "El codigo de verificacion se ha enviado con exito",
        });
      }
    });
  },*/

  /*login: (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    var authenticationData = {
      Username: username,
      Password: password,
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    var userData = {
      Username: username,
      Pool: userPool,
    };

    var user = new AmazonCognitoIdentity.CognitoUser(userData);

    user.authenticateUser(authenticationDetails, {
      // Caso de exito
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
      
          if (error) {
            return res.status(404).send({
              status: "Error",
              message: error,
            });
          } else {
            return res.status(200).send({
              status: "Success",
              accessToken: accessToken,
              message: "Exitosamente logueado",
            });
          }
        },
        onFailure: function(err) {
          return res.status(404).send({
            status: "Error Failure",
            message: err.message,
          });
        }
  
      
    });
      //Caso de falla
     
  },*/
};

module.exports = controller;
crearcuenta();