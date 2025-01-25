
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const mobilemodel= require('./models/Mobilemodel'); 


app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect("mongodb+srv://satputedarshan26104:YyzWDDhFrBQiOrf7@cluster0.3ccgf.mongodb.net/")
  .then(() => console.log("MONGO DB DATABASE CONNECTED SUCCESSFULLY"))
  .catch(err => console.log("MongoDB connection error:", err));


app.post('/addmobiledata', async (req, res) => {
  try {
   
    const newdata = new mobilemodel(req.body);
    
  
    await newdata.save();
    
    res.send("Data saved successfully!");
  } catch (err) {
   
    console.log("Data not saved", err);
    res.status(500).send("Error saving data: " + err.message);
  }
});

app.get('/getmobiledata', async (req, res) => {
  try {
      const newdata = await mobilemodel.find({});
      res.json(newdata);
      console.log(newdata);
    
  } catch (err) {
      console.log("data not received");
   
   
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
