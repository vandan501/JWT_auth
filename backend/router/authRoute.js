const express=require('express');
const authRouter=express.Router();
const { router}=require('../controller/authController');


authRouter.post('/signup',signup);

module.exports={authRouter};