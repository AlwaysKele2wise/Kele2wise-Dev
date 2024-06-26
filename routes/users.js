const express = require("express")
//const {registerUser, getUser, getAUser} = require("../controller/user")
const welcomeUser = require ("../Utils/mailer")
const contactModels = require("../models/contactModels")
const userController = require("../controller/user")

const router = express.Router()

router.post("/msg", async (req, res) => {
    
    try {
        const { firstName, lastName, email, phoneNumber } = req.body;

        // Create a contact object
        const contactObject = {
            firstName,
            lastName,
            email,
            phoneNumber,
        };

        const saveMsg = await contactModels.create(contactObject);

        // Call a function to welcome the user (assuming you have this function)
        await welcomeUser(email);

        // Respond with a success message
        return res.status(200).json({
            msg: "Thanks for contacting!",
        });
    } catch (error) {
        // Handle any errors (e.g., database connection issues)
        console.error("Error processing contact form:", error);
        return res.status(500).json({
            msg: "An error occurred while processing the form",
        });
    }
});


router.post("/register", userController.registerUser);
router.post("/get", userController.getUser);
router.get("/getone", userController.getAUser);


module.exports = router