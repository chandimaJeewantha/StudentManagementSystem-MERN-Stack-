const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyparser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Connection is succesfully");
});

const studentrouter = require("./routs/students.js");
app.use("/student",studentrouter);

app.listen(PORT, () => {
    console.log("our application is running on: "+PORT);
})

//module.exports = connection;
