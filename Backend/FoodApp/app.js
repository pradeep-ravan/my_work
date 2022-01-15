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
    .get(getUser)
    .post(createUser)
    .patch(updateUser)
    .delete(deleteUser);
userRouter
    .route("/:id")
    .get(getUserById);
authRouter
    .post("/signup",setCreatedAt,signupUser)
    .post("/login",loginUser); 
//database
//middleware
function setCreatedAt(req, res, next) {
    req.body.createdAt = new Date().toISOString();
    next();
}
let user = [];
function signupUser(req, res) {
    //email,user name,password
    let { email, password, name } = req.body;
    console.log("user",req.body);
    user.push({
        email, name, password
    })
    res.status(200).json({
        message: "user created",
        createdUser : req.body
    })
}
function createUser(req, res) {
    console.log("req.data", req.body);
    user = req.body;
    res.status(200).send("data received and user added");
}
function getUser(req, res){
    console.log("user request");
    // for sending key value pair
    res.json(user);
}
function updateUser(req, res) {
    let obj = req.body;
    for(let key in obj){
        user[key] = obj[key];
    }
    res.status(200).json(user);
}
function deleteUser(req, res) {
    user = {};
    res.status(200).json(user);
}
function getUserById(req, res) {

    console.log(req.params.id);
    res.status(200).send("hello");
}

function loginUser(req, res) {
    
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