import User from "../model/User.js"
const newsignup=async (req,res) =>{
    const {
        name,
        email,
        password,
        mobile,

    }=req.body
    const user=new User({
        name,
        email,
        password,
        mobile,
    })
    const savedUser=await user.save()
    res.json({
        success:true,
        message:"User created successfully",
        user:savedUser
    })


}
export{
    newsignup}