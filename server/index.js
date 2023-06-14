// console.log("hello, world!")
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const DB = 'mongodb+srv://armaan:armaan@cluster0.0mqrpev.mongodb.net/?retryWrites=true&w=majority';

const authRouter = require('./routes/auth.js');

//CREATING AN API
//GET, PUT , POST, DELETE, UPDATE -> CRUD
// Create, Read, Update, Delete

//middleware
//client -> middleware -> server -> client 

app.use(express.json())
app.use(authRouter)


// Connections

mongoose.connect(DB).then(() => {
    console.log("Connection successful!")
 }).catch((e) => {
    console.log(`Got an error! ${e.message}`)
 });

const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`)
});