const userSchema=require('./model/userModel');
const registerUser=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await userSchema.findOne({email});
        if(user) return res.render('user/registration',{message:'User alredy exist'});
        const newUser=new userSchema
        ({
            email,
            password,
        })
        await newUser.save();
        res.render('user/login',{message:'user created sucessfully'});
    }
    catch(error){
    console.log(error);
}

}