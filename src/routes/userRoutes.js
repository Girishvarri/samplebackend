const express = require('express');
const Router = express.Router();

const UserController = require('../controllers/userController');

//post-method - used to add data into db
Router.post('/api/add-user', UserController.AddUserData);
//get-method - used to get all the data from db
Router.get('/api/get-users', UserController.GetUserData);
//get-method - used to get single record from db
Router.get("/api/get-single-user/:id", UserController.UserDataById);
//put-method - used to update the records in the db
Router.put("/api/update-user/:id", UserController.UpdateSingleUser);
//delete-method - used to delete the record from db
Router.delete("/api/delete-user/:id", UserController.DeleteUserData);

module.exports = Router;