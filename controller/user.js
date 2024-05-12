const userModel = require("../models/users")

const registerUser =  async(req, res, next) => {
    const {email, password, full_name} = req.body
    // const email = req.body.email
    // const password = req.body.password


    console.log({email})
if(!email){
 return   res.status(400).json({
           msg:"email is required to create account",
    })

}


if(!password){
    return   res.status(400).json({
              msg:"password is required to create account",
       })
  
  }
//else

const salt = await bcrypt.genSaltSync(10)


console.log({salt})

    // const saveUser = await userModel.create({
    //        email: email,
    //        password: password
    
    // })
    res.status(201).json({
           msg:"account created successfully",
           //userDetails:saveUser
    })

}


const getUser =  async( req, res, next) => {
  
    const userExist = await userModel.find({})
   
res.status(200).json({
   data:userExist
    })
};

const getAUser =  async( req, res, next) => {
  
    const userExist = await userModel.findOne({email:req.body.email})
   
res.status(200).json({
   data:userExist
    })
};


module.exports = {
    registerUser,
    getUser,
    getAUser
}