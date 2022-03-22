// const express = require("express");
// const ReviewRouter = express.Router();
const { protectRoute } = require("../Routers/authHelper");
const bookingModel = require("../models/bookingModel");
const PlanModel = require("../models/PlanModel");
const factory = require("../helpers/factory");
const createbooking = async function (req, res){
    // try{
    //     let review = await ReviewModel.create(req.body);
    //     console.log("review",review);
    //     let planId = review.plan;
    //     let plan = await PlanModel.findById(planId);
    //     plan.reviews.push(review["_id"]);
    //     if(plan.averageRating){
    //         let sum = plan.averageRating * plan.reviews.length; 
    //         let finalAvgRating = (sum + review.rating) / (plan.review.length + 1);
    //         plan.averageRating = finalAvgRating;
    //     }else{
    //         plan.averageRating = review.rating;
    //     }  
    //     await plan.save();
    //     res.status(200).json({
    //         message:"review created",
    //         review:review
    //     })
    // }catch(err){
    //     res.status(500).json({
    //         message: err.message
    //     })
    // }
};
const getbookings = factory.getElements(bookingModel);
const updatebooking = factory.updateElement(bookingModel);
const deletebooking = async function (req, res){
    // try{
    //     let review = await ReviewModel.findByIdAndDelete(req.body.id);
    //     console.log("review",review);
    //     let planId = review.plan;
    //     let plan = await PlanModel.findById(planId);
    //     let indexOfReview = plan.review.indexOf(review["_id"]);
    //     plan.review.splice(indexOfReview, 1);
    //     await plan.save();
    //     res.status(200).json({
    //         message:"review created",
    //         review:review
    //     })
    // }catch(err){
    //     res.status(500).json({
    //         message: err.message
    //     })
    // }
};
const getbooking = factory.getElement(bookingModel);
// ReviewRouter.use(protectRoute);
bookingRouter
    .route("/:id")
    .get(getbooking)
    .patch(protectRoute, updatebooking)
    .delete(protectRoute, deletebooking)
bookingRouter
    .route("/")
    .get(getbookings)
    .post(protectRoute, createbooking)

module.exports=bookingRouter;
