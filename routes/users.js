const express = require("express")
//const userModel = require("../models/userModels")
const {registerUser, getUser, getAUser} = require("../controller/user")
//const bcrypt = require("bcrypt")
const welcomeUser = require ("../Utils/mailer")


const router = express.Router()

router.post("/msg", async (req, res) => {
 
    const { firstName, LastName, email, phoneNumber } = req.body;

    const contactObject = {
        firstName, 
        LastName, 
        email, 
        phoneNumber,
    }
   
     await welcomeUser(email)

    return res.status(200).json({
        msg: "thanks for contacting",
    
    })
});

router.post("/register", registerUser);
router.post("/get", getUser);
router.get("/getone", getAUser);


module.exports = router