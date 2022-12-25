
const mongoose = require('mongoose');

//schema is used to define what kinf of data we are passing in mongodb
const userSchema = new mongoose.Schema({
    email:{ 
        type: String,
        required: true, //because without email mongoodb will throw error
        unique: true
    },

    password:{
        type: String,
        required: true
    },

    name:{
        type: String, 
        require: true
    }

},{
    timestamps: true
});

const user = mongoose.model('User', userSchema);

module.exports = user;
