const authenticate = require('../middlewares/Auth');
const validate = require('../middlewares/Validate');
const bookValidation = require('../validations/Books');

const express = require('express');
const router = express.Router();
const BooksControler = require('../controllers/Books');

router.route('/').get(authenticate.authenticateToken,BooksControler.list);
router.route('/:id').get(authenticate.authenticateToken,BooksControler.getBook);
router.route('/user/list').get(authenticate.authenticateToken,BooksControler.userList);
router.route('/').post(authenticate.authenticateToken,validate(bookValidation.createBook),BooksControler.create);
router.route('/:id').patch(authenticate.authenticateToken,validate(bookValidation.updateBook),BooksControler.update);
router.route('/:id').delete(authenticate.authenticateToken,BooksControler.removeBook);


module.exports = router;