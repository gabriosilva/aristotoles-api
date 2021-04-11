const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    name:{
        type:String
    },
    thought:{
        type:String
    },
    author:{
        type:String
    },
    url:{
        type:String
    }
    
});

module.exports = mongoose.model('Thought', thoughtSchema);