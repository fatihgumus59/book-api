const Users = require('../models/Users');

const insert = (userData)=>{
    const users = new Users(userData);
    return users.save();
}

const login = (userData)=>{
    return Users.findOne(userData).select('id name email')
}

module.exports ={
    insert,
    login,
}