const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:{
        type: String,
        required: true,
        default :'',
    },
    author:{
        type: String,
        required: true,
        default :'',
    },
    publisher:{
        type: String,
        default :'',
    },
    pageNumber:{
        type: Number,
        required: true,
        default:0
    },
    price:{
        type : mongoose.Types.Decimal128,
        required: true,
        default : 0,
    },
    discount:{
        type : mongoose.Types.Decimal128,
        default : 0,
    },
    netPrice:{
        type : mongoose.Types.Decimal128,
        default : 0,
    },
    admin:{
        type: mongoose.Types.ObjectId,
        ref : 'Admin',
    }
    
},{timestamps: true,versionKey:false});

module.exports = mongoose.model('Books',BookSchema);