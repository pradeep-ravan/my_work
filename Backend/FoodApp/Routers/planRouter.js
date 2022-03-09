const PlanModel = require("../models/planModel");
const express= require("express");
const PlanRouter = express.Router();
const factory = require("../helpers/factory");
const protectRoute = require("../Routers/authHelper");

PlanRouter.use(protectRoute);
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

const createPlan = factory.createElement(PlanModel);
// async function createPlan(req, res) {
//     try{
//         let plan = req.body;
//         if (plan) {
//                 plan = await PlanModel.create(plan);
//                 res.status(200).json({
//                 plan: plan
//             });
//         } else {
//             res.status(200).json({
//                 message: "kindly enter data"
//             });
//         }
//     }catch (err){
//         console.log(err);
//         res.status(500).json({
//             message: "Server error"
//         })
//     }
// }
const getPlans = factory.getElements(PlanModel);
// async function getPlans(req, res){
//         try{
//             //console.log(req.query);
//             let ans = JSON.parse(req.query.myquery);
//             console.log("ans",ans);
//             let plansQuery = PlanModel.find(ans);
//             let sortField = req.query.sort;
//             let sortQuery = plansQuery.sort(`-${sortField}`);
//             let params = req.query.select.split("%").join(" ");
//             let fileteredQuery = sortQuery.select(`${params} -_id`);
//             //pagination
//             let page = Number(req.query.page) || 1;
//             let limit = Number(req.query.limit) || 3;
//             let toSkip = (page - 1) * limit;
//             let paginatedResultPromise = fileteredQuery.skip(toSkip).limit(limit);
//             let result = await paginatedResultPromise;
//             res.status(200).json({
//                 "message": "list of all the plans",
//                 Plans: result
//             })
//         }catch(err) {
//             res.status(500).json({
//                 error:err.message,
//                 "message": "can't get plans"
//             })
//         }
       
//     }
const updatePlan = factory.updateElement(PlanModel);
// async function updatePlan(req, res) {
//     try{
//         await PlanModel.updateOne({ name }, { token:seq }); 
//         let plan = await PlanModel.findOne({ name }); 
//         res.status(200).json(plan);
//     }catch (err) {
//         console.log(err);
//         res.status(500).json({
//             message: "server error"
//         });
//     }
//     // email send to 
//     // nodemailer -> through table tag
//     //service -. gmail
       
//     }
    //findByIdAndDelete
const deletePlan = factory.deleteElement(PlanModel);
async function deletePlan(req, res) {
        plan = {};
        res.status(200).json(plan);
    }
    //id
const getPlanById = factory.getElementById(PlanModel);
// async function getPlanById(req, res) {
//     try{
//          let id = req.params.id;
//         let plan = await PlanModel.getElementById(id);
//         res.status(200).json({
//             plan: plan
//         });
//     }catch (err) {
//         console.log(err);
//         res.status(500).json({
//             message: "server error"
//         });
//     }
       
//     }    

module.exports = PlanRouter;

