// npm init -y
// npm i express
// npm i nodemon
const express= require("express");
//Server : route => request ->responsive/file
//File system : path->interact/type -> file/folder
// server init
const app=express();
//post ki chije  accept
app.use(express.json());
//get:function-> route ->path
//http method :-
//(i) get:- to get data from backend server
//(ii post : to submit data to backend server
//(iii)patch : to update something
//(iv)delete ; to delete something from backend server
app.get("/",function (req, res){
    console.log("hello from homepage");
    res.send("<h1>Hello from Backend</h1>");
})
let user = {   
};
//getting data from server
//giving data from server
//crud app
//create
app.post("/user", function (req,res) {
    console.log("req.data", req.body);
    user = req.body;
    res.status(200).send("data received and user added");
})
//get
app.get("/user",function (req, res){
    console.log("user request");
    // for sending key value pair
    res.json(user);
})
//update
app.patch("/user", function (req, res) {
    let obj = req.body;
    for(let key in obj){
        user[key] = obj[key];
    }
    res.status(200).json(user);
})
//delete
app.delete("/user", function (req, res) {
    user = {};
    res.status(200).json(user);
})
//template routes
app.get("/user/:id", function (req, res) {
    console.log(req.params.id);
    res.status(200).send("hello");
})
//localhost:8080 ?
app.listen(8080,function(){
    console.log("server started");
})
// /port , ip, localhost