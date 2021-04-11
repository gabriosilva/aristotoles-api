const Joi = require('joi');

const randomThoughtValidation = data =>{
    const schema = Joi.object({})

    return schema.validate(data);
}

module.exports.randomThoughtValidation = randomThoughtValidation;