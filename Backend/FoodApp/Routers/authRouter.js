const userModel = require("../models/userModel");
const express= require("express");
const jwt = require("jsonwebtoken");
const {JWT_KEY} = require("../../../secrets");
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

    
    
async function loginUser(req, res) {
        //email, password -> userModel ->
        try{
            if(req.body.email){
                let user =await  userModel.findOne({email:req.body.email})
                if(user){
                    if(user.password==req.body.password){
                        //header
                        let payload = user["_id"];
                        let token = jwt.sign({ id: payload }, JWT_KEY );
                        res.cookie("jwt",token,{ httpOnly: true })
                        return res.status(200).json({
                             user,
                             "message": "user logged in"
                         })
                     }else{
                         return res.status(401).json({
                             "message": "Email or password is wrong"
                         })
                     }
                } else {
                    return res.status(401).json({
                        "message": "Email or password is wrong"
                    })
                }
            }else{
                 return res.status(403).json({
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
    let flag = true;

module.exports = authRouter;