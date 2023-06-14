const express = require('express');

const authRouter = express.Router();

authRouter.post('/api/signup',(req,res)=> {
    console.log(req.body)
    //get data from client
    //post that data into the server
    //return that data to the user

});

module.exports = authRouter;