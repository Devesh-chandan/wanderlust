const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const {  validateReview,isLoggedIn,isReviewAuthor } = require("../middleware.js"); // typo

const ExpressError=require("../utils/ExpressError.js");
const Listings=require("../models/listings.js");


const Review = require("../models/review.js");
const reviewController=require("../controllers/review");






//Reviews


router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.reviewListing));


//Delete Review Route


router.delete("/:reviewId",isLoggedIn,
  isReviewAuthor,wrapAsync (reviewController.deleteReview))







module.exports=router;