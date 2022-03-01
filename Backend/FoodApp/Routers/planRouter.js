const PlanModel = require("../models/planModel");
const express= require("express");
const PlanRouter = express.Router();
const protectRoute = require("../Routers/authHelper");
PlanRouter
    .route("/:id")
    .get(getPlanById)
    .patch(updatePlan)
    .delete(deletePlan)
PlanRouter
    .route("/")
    .get(getPlans)
    .post(createPlan)
    //findByIdAndUpdate
async function createPlan(req, res) {
    try{
        let plan = req.body;
        if (plan) {
                plan = await PlanModel.create(plan);
                res.status(200).json({
                plan: plan
            });
        } else {
            res.status(200).json({
                message: "kindly enter data"
            });
        }
    }catch (err){
        console.log(err);
        res.status(500).json({
            message: "Server error"
        })
    }
}
async function getPlans(req, res){
        try{
            let Plans = await PlanModel.find();
            res.status(200).json({
                "message": "list of all the plans",
                Plans: Plans
            })
        }catch(err) {
            res.status(500).json({
                error:err.message,
                "message": "can't get plans"
            })
        }
       
    }
async function updatePlan(req, res) {
    try{
        await PlanModel.updateOne({ name }, { token:seq }); 
        let plan = await PlanModel.findOne({ name }); 
        res.status(200).json(plan);
    }catch (err) {
        console.log(err);
        res.status(500).json({
            message: "server error"
        });
    }
    // email send to 
    // nodemailer -> through table tag
    //service -. gmail
       
    }
    //findByIdAndDelete
async function deletePlan(req, res) {
        plan = {};
        res.status(200).json(plan);
    }
    //id
async function getPlanById(req, res) {
    try{
         let id = req.params.id;
        let plan = await PlanModel.getElementById(id);
        res.status(200).json({
            plan: plan
        });
    }catch (err) {
        console.log(err);
        res.status(500).json({
            message: "server error"
        });
    }
       
    }    

module.exports = PlanRouter;

