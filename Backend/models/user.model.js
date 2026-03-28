const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname : {
        firstname:{
            type : String,
            required : true,
            minlength:[3,'First name must be at least three character long']
        },
        lastname:{
            type : String,
            minlength:[3,'Last name must be at least three character long']
        }
    },
    email :{
        type: String,
        required : true,
        unique : true,
        minlenght :[5, 'email mustr be at least 5 character long']
    },
    password : {
        type : String, 
        required : true
    },

    socketId : {
        type: String
    }
})

// last ended at 15:22 mins