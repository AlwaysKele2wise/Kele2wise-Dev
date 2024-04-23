const { Router } = require("express")

const router = express.Router()

//const express = require

router.post("/register", ( req, res, next) => {
  
       res.send("account created succesfully")
 });
router.get("/login", ( req, res, next) => {
  
     
       res.send("welcome Kc")
});

router.get("/", ( req, res, next) => {

       res.send("users dashboard")
});

module.experts = router