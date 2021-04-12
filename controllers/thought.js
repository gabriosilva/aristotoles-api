//Models
const Thought = require('../models/Thought');

//Validators
const { randomThoughtValidation } = require('../validators/Thought');

exports.random = async(req,res)=>{
    
    let errorArray = [];
    let success = true;

    //validator
    const {error} = randomThoughtValidation(req.body);
    if(error) return res.status(400).send({
        success:!success,
        error:[error.details[0]]
    })

    //get random object from database
    try{
        const thoughtObj = await Thought.aggregate([{ $sample: {size: 1}}]);
        let responseObj = {
            data:[],
            success:success,
            error:errorArray
        }
        if(thoughtObj){
            responseObj.data = thoughtObj;
        }

        res.status(200).send(responseObj);

    }catch(err){

        success = false;
        const error = {
            message:err.message,
            description: err.description
        }
        errorArray.push(error);
        
        const responseObj = {
            data:[],
            success:success,
            error:errorArray
        }
        res.status(502).send(responseObj);

    }
}
