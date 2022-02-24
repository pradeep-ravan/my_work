const userModel = require("../models/userModel");
const express= require("express");
const userRouter = express.Router();
const protectRoute = require("../Routers/authHelper");
userRouter
    .route("/:id")
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser)
userRouter
    .route("/")
    .get(getUsers);
    //findByIdAndUpdate
async function getUsers(req, res){
        try{
            let users = await userModel.find();
            res.status(200).json({
                "message": "list of all the users",
                users: users
            })
        }catch(err) {
            res.status(500).json({
                error:err.message,
                "message": "can't get users"
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

