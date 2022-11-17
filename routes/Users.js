const validate = require('../middlewares/Validate');
const userValidation = require('../validations/Users');

const express = require('express');
const router = express.Router();
const UsersControler = require('../controllers/Users');

router.route('/').post(validate(userValidation.createUser),UsersControler.create);
router.route('/login').post(validate(userValidation.loginUser),UsersControler.loginUser);



module.exports = router;