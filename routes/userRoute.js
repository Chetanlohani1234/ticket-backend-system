const express = require('express');
//const user_route = express();
const user_route = express();
const userController = require('../controllers/userControllers')
//const { validator } = require('express-validator');


//const userValidation = require ("../validationService/userValidation")


user_route.post('/signUp', userController.userSignIn);
user_route.post('/logIn', userController.loginUser); 
// app.put('/update/:_id', userController.updateUser);
// app.get('/getById/:_id', userController.getUserById);
// app.get('/getAll', userController.getAllUsers);


module.exports = (user_route);
