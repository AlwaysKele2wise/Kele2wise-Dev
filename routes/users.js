const { Router } = require("express")

//const express = require
const router = express.Router()


router.get("/login", ( req, res, next) => {
  
     
           res.send("welcome kelechi")
 });
router.get("/", ( req, res, next) => {
  
     
       res.send("welcome Kc")
});

    module.experts = router