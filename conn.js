const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
mongoose.pluralize(null)
mongoose.connect('mongodb://127.0.0.1:27017/student-apii' ,{
    useUnifiedTopology:true,
    useNewUrlParser :true
} )
.then(()=>{console.log("Your mongodb is connected")}).catch(()=>{console.log("Your mongodb is not connected")})