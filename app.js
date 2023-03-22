const express = require('express')
require('./db/conn')
const multer = require("multer")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const saltround = 10;
const Student = require('./models/student')
const auth = require("./apifolder/auth");
const myrouter = require('./apifolder/getstudent')
// const mrouter = require('./apifolder/multer')

const delrouter = require('./apifolder/deleteapi')
const updaterouter = require('./apifolder/updatestudent')
const regrouter = require('./apifolder/registerStudent')


const router = require("./poststudent")
const singlerouter = require('./apifolder/singlestudent')

const app = express();

app.use(cors())
app.use(router);
app.use(myrouter);
app.use(updaterouter)
app.use(regrouter)
app.use(delrouter);
app.use(singlerouter)
// app.use(mrouter)



const upload = multer({
    storage:multer.diskStorage({
       destination: function (req, file, cb) {
         cb(null,"../Node Js/src/upload" )
       } ,
       filename: function (req, file, cb) {
            cb(null, file.fieldname +"-" + Date.now() + ".jpg")
       }
    })
}).single("img")
app.post("/upload" ,upload, (req, res)=>{
    res.send("File uploaded Successfully")
})







app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome to FreeCodeCamp 🙌");
});



const port = process.env.PORT || 8000;


// app.use(express.json());

                        // To making or read a new API

/* app.get('/' , ( req , res) =>{
    res.send("Hello WOrld")
} ) */

/* app.post('/students' , (req, res) =>{

    const user = new Student(req.body);
    user.save().then(()=>{
        res.status(200).send(user)
    }).catch((e)=>{
        res.status(400).send("Something wrong" + e)
    })

} ) */



        // Read the Data of registered API

       /* app.get('/studentsdata' , async(req , res)=>{
            try {
                let studentData = await Student.find()
                res.status(201 , "Hattt").send(studentData)
            } catch (error) {
                res.status(401).send(error)
            }
        }) */


        

        



        


app.listen(port , ()=> {
    console.log(`Connection is running on port ${port}`)
} )