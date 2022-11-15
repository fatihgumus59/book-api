const express = require('express');
const router = express.Router();
const BooksControler = require('../controllers/Books');

router.route('/').get(BooksControler.list);
router.route('/:id').get(BooksControler.getBook);
router.route('/').post(BooksControler.create);
router.route('/:id').patch(BooksControler.update);
router.route('/:id').delete(BooksControler.removeBook);


module.exports = router;