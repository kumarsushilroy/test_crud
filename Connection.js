
const mongoose = require('mongoose');

const connect = ()=>{
    mongoose.connect('mongodb+srv://romanreins488:gggyIvHdubeEIyrP@cluster0.ihnzdow.mongodb.net/test-user').then(()=>{
        console.log('Connection Successfull')
    }).catch((err)=>{
        console.log(err)
    })
};


module.exports = connect;