const express = require('express')
const Student = require('../models/student')

const singlerouter = express.Router();

singlerouter.get("/getsinglestudents/:id" , async(req, res)=>{
           try {
            const id = req.params.id
               const userinformation = await Student.findById(id)
               res.status(200).send(userinformation)
           } catch (error) {
               res.status(404).send("Error aa rha hai" + error)

           }  
           

       })

       module.exports = singlerouter