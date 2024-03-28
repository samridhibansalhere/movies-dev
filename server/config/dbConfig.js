require("dotenv").config();
const mongoose = require('mongoose');
mongoose.set('strictQuery',false)
mongoose.connect(process.env.mongodb_url)

const connection = mongoose.connection;

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successful');
})

connection.on('error' , (err)=>{
    console.log('Mongo DB Connection Failed');
})