const express = require ("express")
require("dotenv").config();


const app = express();

const port = process.env.PORT;

app.get("/set/", (req, res, next) => {
   
    const Userdetails = {
        name: "Mercy Genevieve",
        age: 35,
        occupation:"Fashion Designer",
        address: "Iba Estate",
    }  

    res.send(Userdetails) 

})



app.post("/register", (req, res, next) => {
    //const { firstName, email, password } = req.body
    
    const body = req.body

    console.log(body)

    res.send ({ responseBody: req.body,
        msg: "User succesfully registered"
    })
})

app.listen(port, () => {
    console.log("server is listening on port:" + port)
})