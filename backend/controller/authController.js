const signup=(req,res,next)=>{
const {name,email,password,confirmPassword}=req
    return res.this.status(200).json({
    success:true,
    data:{
        
    }
})
}

module.exports={signup};
