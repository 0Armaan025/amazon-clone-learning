const express = require('express');

const authRouter = express.Router();

authRouter.post('/api/signup',(req,res)=> {
    console.log(req.body)    

    const {name, email, password} = req.body;

    //post that data into the database
    


});

module.exports = authRouter;