const userModel = require("../models/userModels")
const bcrypt = require("bcrypt")



const registerUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate email
        if (!email) {
            return res.status(400).json({
                msg: "Email is required to create an account",
            });
        }

        // Validate password
        if (!password) {
            return res.status(400).json({
                msg: "Password is required to create an account",
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const saveUser = await userModel.create({
            email: email,
            password: hashedPassword,
        });

        // Respond with success message and user details
        return res.status(201).json({
            msg: "Account created successfully",
            userDetails: saveUser,
        });
    } catch (error) {
        // Handle any errors (e.g., database connection issues)
        console.error("Error creating user:", error);
        return res.status(500).json({
            msg: "An error occurred while creating the account",
        });
    }
};



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