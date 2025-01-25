const mongoose = require("mongoose")

const moviesmodel = new mongoose.Schema(
    {
        
movie_name: String,
hero:String,
heroine:String,
release_year:Number,
rating:Number,
genre:String
    }
)

const MovieModel = mongoose.model("moviedata",moviesmodel)
module.exports=MovieModel