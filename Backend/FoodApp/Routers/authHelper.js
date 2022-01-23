function protectRoute(req, res, next) {
    console.log(req.cookies.test);
    try {
       
        if(req.cookies?.test=="1234"){
            next();
        }else{
            res.status(401).json({
                message: "you are not allowed"
            })
        }
    }catch{
        res.status(500).json({
            message:"server error"
        })
    }
}
module.exports = protectRoute;