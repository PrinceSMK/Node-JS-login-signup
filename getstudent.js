 const express = require('express')
 const Student = require('../models/student')

const myrouter = express.Router();

        myrouter.get("/getstudents" , async(req, res)=>{
            try {
                const userinformation = await Student.find()
                res.status(200).send(userinformation)
            } catch (error) {
                res.status(404).send("Error aa rha hai" + error)

            }  
            

        })

        module.exports = myrouter