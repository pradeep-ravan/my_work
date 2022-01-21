// npm init -y
// npm i express
// npm i nodemon
const express= require("express");
//Server : route => request ->responsive/file
//File system : path->interact/type -> file/folder
// server init
const app=express();
//post ki chije  accept
//folder designate

//get:function-> route ->path
//http method :-
//(i) get:- to get data from backend server
//(ii post : to submit data to backend server
//(iii)patch : to update something
//(iv)delete ; to delete something from backend server

//getting data from server
//giving data from server
//crud app
//create
app.use(express.static('public'));
app.use(express.json());
const userRouter = express.Router();
const authRouter = express.Router();
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
userRouter
    .route("/")
    .get(getUsers);
    
userRouter
    .route("/:id")
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser);
authRouter
    .post("/signup",setCreatedAt,signupUser)
    .post("/login",loginUser); 
//database
//middleware
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
const userModel = require("../FoodApp/models/userModel");
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
//findByIdAndUpdate
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

function loginUser(req, res) {
    //email, password -> userModel ->
    //email??
    //email -> user get -> password
}
//mounting in express

// app.post("/api/user", createUser) ;
// //get
// app.get("/api/user", getUser);
// //update
// app.patch("/api/user", updateUser);
// //delete
// app.delete("/api/user", deleteUser);
// //template routes
// app.get("/api/user/:id", getUserById);
//localhost:8080 ?
app.listen(8080,function(){
    console.log("server started");
})
// /port , ip, localhost