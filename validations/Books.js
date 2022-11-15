const Joi = require('joi');

const createBook = new Joi.object({
    title : Joi.string().required().messages({
        'string.base': `İsim metin türünde olmalıdır.`,
        'string.empty': `İsim boş bir alan olamaz.`,
        'any.required': `İsim zorunlu bir alandır.`
    }),
    author : Joi.string().required().messages({
        'string.base': `Yazar metin türünde olmalıdır.`,
        'string.empty': `Yazar boş bir alan olamaz.`,
        'any.required': `Yazar zorunlu bir alandır.`
    }),
    publisher : Joi.string().messages({
        'string.base': `Yayın Evi metin türünde olmalıdır.`,
        'string.empty': `Yayın Evi boş bir alan olamaz.`,
        'any.required': `Yayın Evi zorunlu bir alandır.`
    }),
    pageNumber : Joi.number().required(),
    price : Joi.number(),
    discount : Joi.number(),
    netPrice : Joi.number(),
    admin : Joi.string(),
});

const updateBook = new Joi.object({
    title : Joi.string().messages({
        'string.base': `İsim metin türünde olmalıdır.`,
        'string.empty': `İsim boş bir alan olamaz.`,
        'any.required': `İsim zorunlu bir alandır.`
    }),
    author : Joi.string().messages({
        'string.base': `Yazar metin türünde olmalıdır.`,
        'string.empty': `Yazar boş bir alan olamaz.`,
        'any.required': `Yazar zorunlu bir alandır.`
    }),
    publisher : Joi.string().messages({
        'string.base': `Yayın Evi metin türünde olmalıdır.`,
        'string.empty': `Yayın Evi boş bir alan olamaz.`,
        'any.required': `Yayın Evi zorunlu bir alandır.`
    }),
    pageNumber : Joi.number(),
    price : Joi.number(),
    discount : Joi.number(),
    netPrice : Joi.number(),
    admin : Joi.string(),
});




module.exports = {
    createBook,
    updateBook,
}