const userModel = require("../models/userModels")
const bcrypt = require("bcrypt")



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
const hashedPassword = await bcrypt.hash(password, salt)

// console.log({hashedPassword})

    const saveUser = await userModel.create({
           email: email,
           password: hashedPassword
    
    })
    res.status(201).json({
           msg:"account created successfully",
           userDetails:saveUser
    })

}


const getUser =  async( req, res, next) => {
  
    const {email, password} = req.body
    const userExist = await userModel.findOne({email: email})

    if(!userExist){
        return res.status(400).json({
            msg:"user not found, please try again"
        })
    }
    // else

       
       const passwordMatches = await bcrypt.compare(password, userExist.password )

       if(!passwordMatches){
        return res.status(400).json({
            msg:"password is incorrect, please try again"
        })
       }

        return res.status(400).json({
            msg:"welcome to PORA Academy",
            userDetails:userExist
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