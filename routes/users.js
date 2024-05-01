const express = require("express")
const userModel = require("../models/users")

const router = express.Router()


router.post("/register", async(req, res, next) => {
       const {email, password} = req.body
       // const email = req.body.email
       // const password = req.body.password

       console.log({email})

       const saveUser = await userModel.create({
              email: email,
              password: password
       
       })
       res.status(201).json({
              msg:"account created successfully",
              userDetails:saveUser
       })
});

router.post("/login", (req, res, next) => {
       res.status(200).json("Welcome Kc")
});


router.get("/get", async( req, res, next) => {
  
       const userExist = await userModel.find({})
      
  res.status(200).json({
      data:userExist
       })
});

module.exports = router 