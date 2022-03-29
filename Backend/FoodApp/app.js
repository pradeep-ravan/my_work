// npm init -y                                   10-53:30
// npm i express
// npm i nodemon
const express= require("express");
let fs = require("fs");
const rateLimit = require("express-rate-limit");
const hpp = require();
const helmet = require("helmet");
const xss = require("xss-clean");
//Server : route => request ->responsive/file
//File system : path->interact/type -> file/folder
// server init
const app=express();
const cookieParser = require("cookie-parser"); 
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
app.use(rateLimit({
    max: 100,
    windowMs: 15 * 60 * 1000,
    message: "Too many accounts created from this IP, please try again after an hour"

}))
app.use(hpp({
    whiteList: [
        'select',
        'page',
        'sort',
        'myquery'
    ]
}))
//to set http headers
app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
//xss use for cross site scripting
app.use(xss());
//mongoSanitize is use to sanitize the mongo db codes
app.use(mongoSanitize());
app.use(cookieParser());
const authRouter = require("./Routers/authRouter");
const userRouter = require("./Routers/userRouter");
const planRouter = require("./Routers/planRouter");
const reviewRouter = require("./Routers/reviewRouter"); 
const bookingRouter = require("./Routers/bookingRouter");
const ExpressMongoSanitize = require("express-mongo-sanitize");
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/plan',planRouter);
app.use('/api/review',reviewRouter);
app.use('/api/booking', bookingRouter);

    

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
app.use(function (req, res){
    res.status(404).json({
        message: "404 page not found"
    })
})