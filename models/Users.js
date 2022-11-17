const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
        default :'',
    },
    email:{
        type: String,
        required: true,
        default :'',
    },
    password:{
        type: String,
        default :'',
        required: true,
    },
    
},{timestamps: true,versionKey:false});

module.exports = mongoose.model('User',UserSchema);