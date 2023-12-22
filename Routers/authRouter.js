
const express = require('express');

const router = express.Router();

const {createUser, getUser, getSingle, userUpdate, deleteUser} = require('../Controllers/authController');

router.post('/create/user', createUser);
router.get('/get/user', getUser);
router.get('/get/single/user/:id', getSingle);
router.put('/update/user/:id', userUpdate);
router.delete('/delete/user/:id', deleteUser);


module.exports = router;