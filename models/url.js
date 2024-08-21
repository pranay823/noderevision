const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shorturl : {
        type : String,
        required : true,
        unique : true,
    },
    RedirectedUrl:{
        type : String,
        required : true,
    },
    visitedHistory :[ {timestamp : {type : Number}} ],
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref :"users"
    }


},{timestamps : true})

const Url = mongoose.model('url',urlSchema);

module.exports =Url