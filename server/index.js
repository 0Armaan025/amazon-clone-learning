// console.log("hello, world!")
const express = require('express');

const app = express();

const authRouter = require('./routes/auth.js');

//CREATING AN API
//GET, PUT , POST, DELETE, UPDATE -> CRUD
// Create, Read, Update, Delete

//middleware
//client -> middleware -> server -> client 

app.use(authRouter)

const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`)
});