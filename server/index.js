// console.log("hello, world!")
const express = require('express');

const app = express();

//CREATING AN API
app.get("/hello-world",(req, res) => {
    res.send("hey there armaan")
});
//GET, PUT , POST, DELETE, UPDATE -> CRUD

// Create, Read, Update, Delete


const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`)
});