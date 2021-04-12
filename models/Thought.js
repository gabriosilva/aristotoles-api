const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thought:{
        type:String
    },
    author:{
        type:String
    },
    url:{
        type:String
    },
    createdTimestamp:{
        type:Number
    }
    
});

module.exports = mongoose.model('Thought', thoughtSchema);