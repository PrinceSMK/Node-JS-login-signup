const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
require('dotenv').config()


// const validator = require('validator');
mongoose.pluralize(null)
const studentSchema = new mongoose.Schema({
    name: {
        type : String,
        minlength:3,
        required:true
    }, // String is shorthand for {type: String}
    email:{
        type : String,
        required : true,
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error('Invalid Email')
        //     }
        // }

    } ,
    phone:{
        type: Number
    },
    password:{
        type : String,
        minlength: 3,
        required: true
    },
    tokens:[
        {
            token:{
        type: String,
        required: true
            }
        }
    ]

    // City: {
    //     type : String
    // }
    // date: { type: Date, default: Date.now },
    // hidden: Boolean,
    // meta: {
    //   votes: Number,
    //   favs:  Number
    // }
  });
  
  
  studentSchema.pre('save', async function (next) {
      if( this.isModified('password')){
          this.password = await bcrypt.hash(this.password, 12)
        }
        next();
    }); 

    studentSchema.methods.generateAuthToken = async function (_id) {
        try {
            let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
            this.tokens = this.tokens.concat({token:token})
            await this.save()
            return token
            resizeBy.cookie
        } catch (error) {
            console.log(error)
        }
    }


    studentSchema.methods.comparePassword = function(password, res) {
        bcrypt.compare(password, this.password, function(err, isMatch) {
            const token = req.body.token || req.query.token || req.headers[ "x-access-token" ];

            const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
            console.log(verifyUser)
            if (err) {
            return res.json(err, false);
          }
          return res.json(null, isMatch);
        });
      };
    
      const Student = new mongoose.model('Student' , studentSchema )
      module.exports = Student