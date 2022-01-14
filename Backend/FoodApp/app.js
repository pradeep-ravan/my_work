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

let user = {   
};
//getting data from server
//giving data from server
//crud app
//create
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
//mounting in express
const router = express.Router();
app.use('/api/user',router);

router.
route("/")
.get(getUser)
.post(createUser)
.patch(updateUser)
.delete(deleteUser);
router
.route("/:id")
.get(getUserById);
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