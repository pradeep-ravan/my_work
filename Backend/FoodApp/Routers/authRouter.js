const userModel = require("../models/userModel");
const express= require("express");
const authRouter = express.Router();
authRouter
    .post("/signup",setCreatedAt,signupUser)
    .post("/login",loginUser); 

function setCreatedAt(req, res, next) {
        //{}
        let body = req.body;
        let length = Object.keys(body).length;
        if(length==0){
            return res.status(400).json({
                message: "can't create user when body is empty"
            })
        }
        req.body.createdAt = new Date().toISOString();
        next();
    }
    // let user = [];
    
    
        
    // function createUser(req, res) {
    //     console.log("req.data", req.body);
    //     user = req.body;
    //     res.status(200).send("data received and user added");
    // }
    //find
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
    
    
async function loginUser(req, res) {
        //email, password -> userModel ->
        try{
            if(req.body.email){
                let user =await  userModel.findOne({email:req.body.email})
                if(user.email==req.body.email && user.password==req.body.password){
                   return res.status(200).json({
                        user,
                        "message": "user logged in"
                    })
                }else{
                    return res.status(401).json({
                        "message": "Email or password is wrong"
                    })
                }
            }else{
                 return res.json(403).json({
                    message: " Email is not present"
                })
            }
        }catch(err) {
            res.status(500).json({
                error:err.message,
                "message": "can't get users"
            })
        }
        //email??
        //email -> user get -> password
    }
module.exports = authRouter;