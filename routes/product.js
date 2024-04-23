const { Router } = require("express")

//const express = require
const router = express.Router()


router.post("/", ( req, res, next) => {
  
     
           res.send("welcome")
});

router.get("/", ( req, res, next) => {
  
     
    res.send({
        product:{
            name_of_product:"IPAD",
            model:"IPAD 23434mL",
            image: "htttots/image",
            address:"no 1, makanjuola street"
        }
    }

    )
});

    module.experts = router