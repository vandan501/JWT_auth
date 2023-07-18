const mongoose=require('mongoose');
const {Schema }=mongoose;
const userSchema=new Schema({

name:{
    type:String,
    required:[true,'user name is required'],
    minLength:[5,'Name must be atleast 5 char'],
    maxLength:[50,'Name must be less than 50 char'],
    trim:true
},
email:{
    type:String,
    required:[true,'user email is required'],
    unique:true,
    lowercase:true,
    unique:[true,'already registered']
},
password:{
    type:String,
    select:false
},
forgotPasswordToken:{
    type:String,
},
forgotpasswordExpiryDate:{
    type:Date,
}
},{
    timestemps:true

});

const userModel=mongoose.model('user',userSchema)
module.exports=userModel;