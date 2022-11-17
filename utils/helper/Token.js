const CryptoJS = require('crypto-js');
const Jwt = require('jsonwebtoken');

const passwordToHash = (password)=>{
    return CryptoJS.HmacSHA256(password,CryptoJS.HmacSHA1(password,process.env.PASSWORD_HASH).toString()).toString();
}

const generateAccessToken =(user)=>{
    return Jwt.sign({id:user.id},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'});
};


module.exports={
    passwordToHash,
    generateAccessToken
}