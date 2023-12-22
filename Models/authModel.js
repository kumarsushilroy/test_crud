
const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true 
    },

    project:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('registrations', authSchema);