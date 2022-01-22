const userModel = require("../models/userModel");
const express= require("express");
const userRouter = express.Router();
userRouter
    .route("/:id")
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser)
userRouter
    .route("/")
    .get(getUsers);
    //findByIdAndUpdate
async function signupUser(req, res) {
        //email,user name,password
        try {
            let userObj = req.body;
            console.log("userObj",req.body);
            let user = await userModel.create(userObj);
            console.log("user", user);
            
            // put in database
            // user.push({
            //     email, name, password
            // })
            res.status(200).json({
            message: "user created",
            createdUser : user
            })
        } catch (err) {
            res.status(500).json({
                message:err.message
            })
        }
    }
function updateUser(req, res) {
        let obj = req.body;
        for(let key in obj){
            user[key] = obj[key];
        }
        res.status(200).json(user);
    }
    //findByIdAndDelete
function deleteUser(req, res) {
        user = {};
        res.status(200).json(user);
    }
    //id
function getUserById(req, res) {
    
        console.log(req.params.id);
        res.status(200).send("hello");
    }    
module.exports = userRouter;

