const mongoose = require("mongoose");
const emailValidator = require("email-validator");
let {DB_LINK} = require("../../../secrets");
mongoose.connect(DB_LINK).then(function (db) {
    //console.log(db);
    console.log("connected to db");
}).catch(function (err) {
    console.log("err",err);
})




//syntax
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: function() {
            return emailValidator.validate(this.email);
        }
    },
    age: {
        type: Number
    },
    password: {
       type: String,
       minlength: 7,
       required: true, 
    },
    confirmPassword: {
        type: String,
        minlength: 7,
        required: true,
        validate: function() {
            return this.password == this.confirmPassword
        }
    }
})

const userModel = mongoose.model("userModel", userSchema);


 