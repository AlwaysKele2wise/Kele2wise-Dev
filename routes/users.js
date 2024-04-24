const express = require("express")

const router = express.Router()


router.post("/register", (req, res, next) => {
       res.send("account created successfully")
});

router.post("/login", (req, res, next) => {
  
     res.send("welcome Kc")
});

router.get("/", (req, res, next) => {

       res.send("users dashboard")
});

module.exports = router 