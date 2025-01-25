const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.get('/', (req, res) => {
  res.json({
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com"
  });
});


app.get('/download', (req, res) => {
  res.download("index.js");  
});


app.post('/postdata', (req, res) => {
  
  res.send("DATA RECEIVED: " + JSON.stringify(req.body));  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
