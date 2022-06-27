var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
var express = require('express');

var cognitoController = require('../controllers/cognitoController');

var router = express.Router();

router.post('/crearcuenta' , cognitoController.crearcuenta);

/*
router.post('/confirm-user' , userController.confirmarRegistro);
router.post('/resend-code', userController.resendCodeConfirmation);
router.post('/login', userController.login);*/
module.exports= router;