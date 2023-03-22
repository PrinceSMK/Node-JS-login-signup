// INCLUDE ALL NECESSARY PACKAGES
const express = require("express");
const mrouter = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');

// var url = "mongodb://127.0.0.1:27017/Media";
const app = express();
// IMAGE UPLOAD CODE IN NODE.JS
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'Uploads');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + file.originalname);
//     }
// });
// // FILE_FILTER WHICH IS PERMSSION FOR UPCOMING FILES FROM ANGULAR
// const fileFilter = (req, file, cb) => {
//     // ACCEPT OR REJECT A FILE
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'video/mp4' || file.mimetype === 'audio/ogg'
//         || file.mimetype === 'audio/mp3' || file.mimetype === 'audio/x-m4a' || file.mimetype === 'application/octet-stream'
//         || file.mimetype === 'application/pdf') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };
// // STORE THIS IMAGE IN A VARIABLE TO UPLOAD TO DATABASE
// const upload = multer({
//     storage: storage,
//     //DEFINE THE SIZE OF IMAGE
//     limits: {
//         fileSize:  1024 * 1024 * 16  // 16MB Size
//     },
//     fileFilter: fileFilter
// });
// //..............................// Image Upload Code In node Js//........................
// const categoryModel = require('../NODE JS/Node Js/src/apifolder/multer')
// mrouter.post("/", upload.single('file'), (req, res, next) => {
//     if(req.file.mimetype=="image/png" || req.file.mimetype=="image/jpeg" || req.file.mimetype=="image/jpg"){

//     const Category = new categoryModel({
//         _id: new mongoose.Types.ObjectId(),
//         title:req.body.title,
//         path: req.file.path,
//         name: req.file.filename,
//         type:req.file.mimetype,
//     });
//     Category.save().then(result => {
//         console.log(result);
//        res.send( req.file.filename);
//     });
// }

   
// });
// mrouter.get('/', (req, res, next) => {
//     categoryModel.find(function (request, response) {
//         res.status(200).json(response);
//     });
// });

// module.exports = mrouter;


















// const express = require('express');
// const multer = require("multer")
// const multerrouter = express.Router();

// const upload = multer({
//     storage:multer.diskStorage({
//        destination: function (req, file, cb) {
//          cb(null,"./upload" )
//        } ,
//        filename: function (req, file, cb) {
//             cb(null, file.fieldname +"-" + Date.now() + ".jpg")
//        }
//     })
// }).single("img")
// multerrouter.post("/upload" ,upload, (req, res)=>{
//     res.send("File uploaded Successfully")
// })




// module.exports = multerrouter




