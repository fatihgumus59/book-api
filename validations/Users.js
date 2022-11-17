const Joi = require('joi');

const createUser = new Joi.object({
    name : Joi.string().required().messages({
        'string.base': `İsim metin türünde olmalıdır.`,
        'string.empty': `İsim boş bir alan olamaz.`,
        'any.required': `İsim zorunlu bir alandır.`
    }),
    email : Joi.string().email().required().messages({
        'string.base': `E-Posta metin türünde olmalıdır.`,
        'string.empty': `E-Posta boş bir alan olamaz.`,
        'any.required': `E-Posta zorunlu bir alandır.`
    }),
    password : Joi.string().required().messages({
        'string.base': `Şifre metin türünde olmalıdır.`,
        'string.empty': `Şifre boş bir alan olamaz.`,
        'any.required': `Şifre zorunlu bir alandır.`
    }),
});

const loginUser = new Joi.object({
    email : Joi.string().email().required().messages({
        'string.base': `E-Posta metin türünde olmalıdır.`,
        'string.empty': `E-Posta boş bir alan olamaz.`,
        'any.required': `E-Posta zorunlu bir alandır.`
    }),
    password : Joi.string().required().messages({
        'string.base': `Şifre metin türünde olmalıdır.`,
        'string.empty': `Şifre boş bir alan olamaz.`,
        'any.required': `Şifre zorunlu bir alandır.`
    }),
});



module.exports = {
    createUser,
    loginUser,
}