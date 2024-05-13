const express = require("express")
const userModel = require("../models/users")
const {registerUser, getUser, getAUser} = require("../controller/user")
const bcrypt = require("bcrypt")


const router = express.Router()


router.post("/register", registerUser);

// router.post("/login", (req, res, next) => {
//        res.status(200).json("Welcome Kc")
// });


router.post("/get", getUser);
router.get("/getone", getAUser);
module.exports = router 