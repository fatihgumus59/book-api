const validate = require('../middlewares/validate');
const bookValidation = require('../validations/Books');

const express = require('express');
const router = express.Router();
const BooksControler = require('../controllers/Books');

router.route('/').get(BooksControler.list);
router.route('/:id').get(BooksControler.getBook);
router.route('/').post(validate(bookValidation.createBook),BooksControler.create);
router.route('/:id').patch(validate(bookValidation.updateBook),BooksControler.update);
router.route('/:id').delete(BooksControler.removeBook);


module.exports = router;