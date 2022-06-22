/*
// Inicializar el proveedor de credenciales de Amazon Cognito
CognitoCachingCredentialsProvider credentialsProvider = new CognitoCachingCredentialsProvider(
    getApplicationContext(),
    "us-east-1:c08be2f5-c37d-474e-a20f-e7dbcd4da7c3", // ID del grupo de identidades
    Regions.US_EAST_1 // Región
);
*/

const express = require('express');

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');

const poolData = {    
    UserPoolId : "us-east-1_A3Pxa5rZs", // Your user pool id here    
    ClientId : "4kore39drljf6vdr7ugrg16egv" // Your client id here
    }; 
const pool_region = 'us-east-1';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    console.log("JSON:" + JSON.stringify(req.body));
 
    var attributeList = [];
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email",Value:req.body.email}));
 
    /*attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"name",Value:"Prasad Jayashanka"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"preferred_username",Value:"jay"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"gender",Value:"male"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"birthdate",Value:"1991-06-21"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"address",Value:"CMB"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"phone_number",Value:"+5412614324321"}));
    */

    userPool.signUp(req.body.username, req.body.password, attributeList, null, function(err, result){
        if (err) {
            console.log(err);
            res.json(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
        res.json({
            bienvenido: `${cognitoUser.getUsername()}`
        })
    });
   
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});



