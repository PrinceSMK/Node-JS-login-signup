const express = require("express");
const Student = require("../models/student")
const updaterouter = express.Router();

updaterouter.use(express.json());






    updaterouter.patch("/updatestudent/:id" , async(req , res ) =>{
                try {
                        const id = req.params.id
                        const user =await Student.findByIdAndUpdate(id , req.body)
                    console.log(user)
            res.status(200).send("Apka Data update ho gya hai")
                } catch (error) {
                    res.status(404).send("Error aa gya hai" + error)
                }



            
        } )

module.exports = updaterouter