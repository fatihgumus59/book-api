const Books = require('../models/Books');

const insert = (bookData)=>{
    const books = new Books(bookData);
    return books.save();
}

const listAll = (bookData)=>{
    const books = Books.find({}).select('-updatedAt').sort('-createdAt')
    return books;
}

module.exports ={
    insert,
    listAll,
}