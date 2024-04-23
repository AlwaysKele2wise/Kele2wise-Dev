const { Router } = require("express")

//const express = require
const router = express.Router()


router.post("/register", ( req, res, next) => {
  
     
           res.send("account created succesfully")
 });
router.post("/login", ( req, res, next) => {
  
     
       res.send("welcome Kc")
});

router.get("/", ( req, res, next) => {
  
     
       res.send("users dashboard")
});

module.experts = router