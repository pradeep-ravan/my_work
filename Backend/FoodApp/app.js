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
const authRouter = require("./Routers/authRouter");
const userRouter = require("./Routers/userRouters");
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

    

//database
//middleware

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