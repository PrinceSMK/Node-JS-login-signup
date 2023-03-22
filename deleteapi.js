const express = require("express");
const Student = require("../models/student")
const delrouter = express.Router();






        delrouter.delete("/delstudent/:id" , async(req , res ) =>{
                try {
                        const id = req.params.id
                        const user =await Student.findByIdAndDelete(id)
                    console.log(user)
            res.status(200).send("Apka Data delete ho gya hai")
                } catch (error) {
                    res.status(404).send("Error aa gya hai" + error)
                }



            
        } )

module.exports = delrouter