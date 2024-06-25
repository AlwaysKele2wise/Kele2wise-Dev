<<<<<<< HEAD
const express = require ("express")
require("dotenv").config();
=======
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();


const port = process.env.PORT;
const db = process.env.db;

//console.log(process.env.kelechi_secret_key)

app.use(express.urlencoded({extended: true}));
app.use(express.json({}));

require("./statup/routes")(app)

//const db = "mongodb+srv://kelechi:75DkiwNpksEKQNWI@kelechi.ricnkkk.mongodb.net/"

mongoose.set('strictQuery', false);

mongoose
  .connect(db)
  .then(() => console.log("kele2wiseDevDB connected successfully...."));




app.get("/test", ( req, res, next) => {

    const newUser = function(req, res) {
        this.name =  'Jane Doe',
        this.age = 28
      };
      
    try{
        const user = newUser();
        if(!user){
            throw new Error("User is not found");
        }
      } catch (error) {
        return next(error);
      }
     
       return res.status(200).json({success: true})
});

app.post("/register/lastclass", ( req, res, next) => {
  
   const { email, password, full_name } = req.body;

   const body = {
    email, 
    password,
    full_name 
   };

   //console.log(body);

   res.send({
    body,
   msg:"user successfully registered"
  });

});

app.put("/update", ( req, res, next) => {
  
    
const {full_name, age, address } = req.body;

const user_details = {
        email:"kele2wise@gmail.com",
        password: "234857463893",
        full_name: full_name,
        age: age,
        address: address
       }
 
       res.send({
        user_details,
        msg: "update successful",
   });
});
 
app.patch("/update", ( req, res, next) => {
  
   const {password, full_name} = req.body;
   
      const user_details = {
        password: "9056168415",
        full_name: "kele2wise ukpai aka De Boss"
    }
     
           res.send({
            user_details,
            msg: "saved successful",
       });
});

app.delete("/delete", ( req, res, next) => {
  
    const user = { email, password, full_name, age } = req.body;
 
    const user_details = {
     email, 
     password,
     full_name,
     age 
    };
 
    
    // console.log(body);
 
    res.send({
     user_details,
    msg:"Delete succesfully"
   });
 
 });

 const newUser = () => undefined;

 function errorHandler(error) {
    console.error('An error occurred:', error);
  }
  
//app.use(errorHandler)
app.listen(port, () =>{
    console.log("server is listening on port:" + port)  
});



  // 1. CHECK THAT THE USEREXIST  /// email address
  // 2. TO CHECK IF THE PASSWORD MATCHES
  // 3. LOG THE USR IN
     
 //const user_details = {
    //        email:"kele2wise@gmail.com",
    //        password: "234857463893",
    //        full_name: full_name,
   //         age: age,
    //        address: address
 





/*function myFunction(b1, b2)  {
    console.log(b1 + b2)
}
myFunction(7, 6)
*/




const myFunction = (b1, b2) =>  {
    console.log(b1 + b2)
}



/*let x = 5
let y = 6
let z = 7 + 5

console.log(x + y + z)


function myFunction(p1, p2){
    return p1 * p2
} 

console.log(myFunction(10, 5))
myFunction(10, 5)

function toCelsius(f) {
    return (f - 32) * 5 / 9
}

function toFahrenheit(c) {
    return c * 9 / 5 + 32
}

console.log(toCelsius(77))
console.log(toFahrenheit(100))*/






// Function to compute the product of q1 and q2
/*function myFunction() {
   const result = 15 * 10
    // return resulty

    console.log({result: "here is your result" + " " + result})
}
myFunction()


const dev = (par1,par2) => {
    console.log(par1 + par2)

}

dev(7, 3)*/
>>>>>>> 6a3bcf613d6dc1ff360e83562990ce84bfa07d48


const app = express();

const port = process.env.PORT;

<<<<<<< HEAD
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
=======
/*const dev = (par1,par2) => {
console.log({sum:par1+par2})
console.log("Kelechi ukpai")
}

dev(2, 3)*/





// ecommerce
//1. Users( all the users)
//2. Products( all the products)
//3. payment()
//4. sellers

// app.get("/student/age", req, res, next) => {
    // const studentDetails ={
    //     }
    //     
    //     res.send(studentDetails);
// });
>>>>>>> 6a3bcf613d6dc1ff360e83562990ce84bfa07d48
