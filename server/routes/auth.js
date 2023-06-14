const express = require('express');
const User = require('../models/user.js');
const bcryptjs = require('bcryptjs')

const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res) => {
    console.log(req.body)

    try {
        const { name, email, password } = req.body;

        //to validate, we need a model

        //post that data into the database

        //find in db 
        //so find email if it already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ msg: 'User with same email exists bro, what are you doing?' });
        }

        const hashedPassword = await bcryptjs.hash(password, 8);

        let user = new User({
            email,
            password: hashedPassword,
            name,
        });
        user = await user.save();
        res.json(user)

    }
    catch (e) {
        res.status(500).json({error: e.message});
    }





});

module.exports = authRouter;