const express = require("express");
const jwt = require("jsonwebtoken")
require('../db/conn')
const bcrypt = require("bcryptjs")
const Student = require("../models/student")
const regrouter = express.Router();


regrouter.use(express.json());





//bcryptjs

//User modal of mongoDB


//Post request for login
regrouter.post('/login', (req, res) => {
    //email and password
    const email = req.body.email
    const password = req.body.password

    //find user exist or not
    let token;
    const user = Student.findOne({ email })
    
     token = req.body.token || req.query.token || req.headers[ "x-access-token" ];

    res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 25892000000, ),
        httpOnly: true
    })
    const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verifyUser)
    
        .then(user => {
            //if user not exist than return status 400
            if (!user) return res.status(400).json({ msg: "User not exist" })

            //if user exist than compare password
            //password comes from the user
            //user.password comes from the database
            bcrypt.compare(password, user.password, (err, data) => {
                //if error than throw error
                if (err) throw err

                //if both match than you can do anything
                if (data) {
                    return res.status(200).json({ msg: "Login success" })
                } else {
                    return res.status(401).json({ msg: "Invalid credencial" })
                }

            })

        })

})

module.exports = regrouter