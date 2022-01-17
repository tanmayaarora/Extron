const express = require('express');
const {getAllusers, getSpecificuser, createUser, updateUser, deleteUser} = require('./user.controller.js');
var userRoutes = express.Router();

userRoutes.get('/',getAllusers);
userRoutes.get('/:id',getSpecificuser);
userRoutes.post('/create',createUser);
userRoutes.put('/update/:id',updateUser);
userRoutes.delete('/delete/:id',deleteUser);

module.exports = userRoutes;