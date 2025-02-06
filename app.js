const express = require('express');
const mongoose = require('mongoose')
const UserRouter = require('./src/routes/userRoutes');
const app=express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/',UserRouter);

mongoose.connect('mongodb+srv://prasad:1234@cluster0.bujbcmx.mongodb.net/')
.then(() => app.listen(5000))
.then(() =>
console.log("Connected to Database & Listening to localhost 5000")
)
.catch((err) => console.log(err));

