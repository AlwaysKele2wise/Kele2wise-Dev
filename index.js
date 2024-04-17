

const express = require('express');
require("dotenv").config();

const app = express();

const port = process.env.PORT
//console.log(process.env.kelechi_secret_key)
 
app.use(express.urlencoded({extended: true}))
app.use(express.json({}))
app.get("/student/age", ( req, res, next) => {
const studentDetails ={
        name: "Emmanuel ukpai",
        age: 30,
        clas: 1802,
        address: "Ojo Lagos igboelerin"
    }
    
    res.send(studentDetails)
});

app.post("/register", ( req, res, next) => {
  
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
 

app.listen(port, () =>{
    console.log("server is listening on port:" + port)  
 })




  
     

 





/*function myFunction(b1, b2) {
    console.log(b1 + b2)
}
myFunction(7, 6)

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


// function dev() {
// console.log("dev")
//}

// dev()


/*const dev = (par1,par2) => {
console.log({sum:par1+par2})
console.log("Kelechi ukpai")
}

dev(2, 3)*/