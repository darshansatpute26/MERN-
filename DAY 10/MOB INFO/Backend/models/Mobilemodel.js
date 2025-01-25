const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema(
  {
    mobile_name: { type: String, required: true },  
    mobile_model: { type: String, required: true }, 
    release_year: { type: Number, required: true }, 
    rating: { type: Number, required: true, min: 0, max: 10 }, 
    genre: { type: String, required: true }, 
  },
  { timestamps: true }  
);

const MobileModel = mongoose.model("MobileData", mobileSchema);
module.exports = MobileModel;
