const Listings = require("../models/listings.js");
const Review = require("../models/review.js");

module.exports.reviewListing=async (req, res) => {
  let listing = await Listings.findById(req.params.id);

let newReview = new Review(req.body.review);
newReview.author = req.user._id;   // 🔥 THIS LINE
await newReview.save();

  listing.reviews.push(newReview._id);

  await listing.save();

  res.redirect(`/listings/${listing._id}`);
}



module.exports.deleteReview=async (req,res)=>{
    let{id,reviewId}=req.params;
    await Listings.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);

}

module.exports.renderLogin=(req,res)=>{
    res.render("users/login.ejs");
}