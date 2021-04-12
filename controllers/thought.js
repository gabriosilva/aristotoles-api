//Models
const Thought = require('../models/Thought');

//Validators
const { randomThoughtValidation, addThoughtValidation } = require('../validators/Thought');




exports.addThought = async(req,res) => {
     const responseObj = {
            data:[],
            success:success,
            error:errorArray
    }

    const {error} = addThoughtValidation(req.body);
    if(error) return res.status(400).send({
        success:!success,
        error:[error.details[0]]
    })
    
    const thoughtObj = new Thought({
        thought: req.body.thought,
        author: req.body.author,
        url: req.body.url
    })

    try{
        const addedThoughtObj = await Thought.save();
        responseObj.data.push(addedThoughtObj);
        return res.status(200).send(responseObj);
    }catch(err){
        success = false;
        const error = {
            message:err.message,
            description: err.description
        }

        errorArray.push(error);

        return res.status(502).send(responseObj);
        
    };
}


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
