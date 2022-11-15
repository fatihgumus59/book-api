const Books = require('../models/Books');

const insert = (bookData)=>{
    const books = new Books(bookData);
    return books.save();
}

const listAll = (where)=>{
    return Books.find(where || {}).select('-updatedAt').sort('-createdAt')
}

const getById = (Id)=>{
    return Books.findOne({_id: Id}).select('-updatedAt');  
}

const modify = (id,data)=>{
    return Books.findByIdAndUpdate(id,data,{new:true}).select('-createdAt');
}

const remove = (id)=>{
    return Books.findByIdAndRemove(id,{new:true}).select('-createdAt');
}

module.exports ={
    insert,
    listAll,
    getById,
    modify,
    remove,
}