const express = require("express");
const jwt = require("jsonwebtoken")
require('./db/conn')
const bcrypt = require("bcryptjs")
const Student = require("./models/student")
const router = express.Router();


router.use(express.json());




        router.post("/poststudent" , async(req , res ) =>{
                try {
                
                    const user =await new Student(req.body);
                    console.log(user)
                    const token = await user.generateAuthToken();
                    res.cookie(token, "jwttoken" , {
                        expires: new Date(Date.now() + 25892000000),
                        httpOnly: true
                    })
                    user.save()
                    
            console.log(token)
            res.status(200).send("Apka Data add ho gya hai")
                } catch (error) {
                    res.status(404).send("Error aa gya hai" + error)
                }
 
        } )




module.exports = router