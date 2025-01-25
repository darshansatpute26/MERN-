
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const moviesmodel= require('./models/moviesmodel'); 
const cors = require('cors');

app.use(cors());


app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect("mongodb+srv://satputedarshan26104:YyzWDDhFrBQiOrf7@cluster0.3ccgf.mongodb.net/")
  .then(() => console.log("MONGO DB DATABASE CONNECTED SUCCESSFULLY"))
  .catch(err => console.log("MongoDB connection error:", err));


app.post('/addmoviesdata', async (req, res) => {
  try {
   
    const newdata = new moviesmodel(req.body);
    
  
    await newdata.save();
    
    res.send("Data saved successfully!");
  } catch (err) {
   
    console.log("Data not saved", err);
    res.status(500).send("Error saving data: " + err.message);
  }
});

app.get('/getmoviesdata', async (req, res) => {
  try {
      const newdata = await moviesmodel.find({});
      res.json(newdata);
      console.log(newdata);
    
  } catch (err) {
      console.log("data not received");
   
   
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
