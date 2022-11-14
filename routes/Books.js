const express = require('express');
const router = express.Router();
const BooksControler = require('../controllers/Books');

router.route('/').get(BooksControler.list);
router.route('/').post(BooksControler.create);


module.exports = router;