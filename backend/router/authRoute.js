const express=require('express');
const authRouter=express.Router();
const jwtAuth=require('../middleware/jwtAuth')
const { signup,signin,getUser,logout}=require('../controller/authController');


authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.get('/user',jwtAuth ,getUser);
authRouter.get('/logout',jwtAuth ,logout);

module.exports=authRouter;    