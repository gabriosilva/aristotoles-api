const Joi = require('joi');

const randomThoughtValidation = data =>{
    const schema = Joi.object({})

    return schema.validate(data);
}

const addThoughtValidation = data => {
    const schema = Joi.object({
        thought: Joi.string().max(1000).required(),
        author: Joi.string().max(255).required(),
        url: Joi.string().max(255).required()
    })

    return schema.validate(data);
}

module.exports.randomThoughtValidation = randomThoughtValidation;
module.exports.addThoughtValidation = addThoughtValidation;