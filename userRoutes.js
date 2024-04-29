const express = require('express');
const router = express.Router();

 const userController = require('../controllers/userController');

 router.get('/', userController.getAllUsers);
 router.post('/', userController.createUser);
 router.put("/", userController.updateUser)
 router.delete("/", userController.deleteUser)
 //Implementar a update ('/:id')
 //Implementar a delete ('/:id')

 module.exports = router;