const express = require("express");
const bookingRouter = express.Router();
// const ReviewModel = require("../models/reviewModel");
const protectRoute  = require("../Routers/authHelper");
const bookingModel = require("../models/bookingModel");
const userModel = require("../models/userModel");
const factory = require("../helpers/factory");
const initiateBooking = async function (req, res){
    try{
            let booking = await bookingModel.create(req.body);
            let bookingId = booking["_id"];
            let userId = req.body.user;
            let user = await userModel.findById(userId);
            user.bookings.push(bookingId);
            await user.save();
            res.status(200).json({
            message:"booking created",
            booking:booking
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
};
const getbookings = factory.getElements(bookingModel);
const updatebooking = factory.updateElement(bookingModel);
const deletebooking = async function (req, res){
    try{
        let booking = await bookingModel.findByIdAndDelete(req.body.id);
        console.log("booking",booking);
        let userId = booking.user;
        let user = await userModel.findById(userId);
        let indexOfbooking = user.bookings.indexOf(booking["_id"]);
        user.booking.splice(indexOfbooking, 1);
        await user.save();
        res.status(200).json({
            message:"booking deleted",
            booking:booking
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
};
const getbookingById = factory.getElementById(bookingModel);
bookingRouter.use(protectRoute);
bookingRouter
    .route("/:id")
    .get(getbookingById)
    .patch(protectRoute, updatebooking)
    .delete(protectRoute, deletebooking)
bookingRouter
    .route("/")
    .get(getbookings)
    .post(protectRoute, initiateBooking)

module.exports=bookingRouter;
