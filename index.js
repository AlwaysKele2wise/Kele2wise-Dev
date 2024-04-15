
// function dev() {
// console.log("dev")
//}

// dev()


/*const dev = (par1,par2) => {
console.log({sum:par1+par2})
console.log("Kelechi ukpai")
}

dev(2, 3)*/

 

const express = require('express');
require("dotenv").config();

const app = express();

const port = process.env.PORT
//console.log(process.env.kelechi_secret_key)
 

app.get("/student", ( req, res, next) => {
    const studentDetails ={
        name: "Emmanuel",
        age: 30,
        class: 1802,
        address: "Ojo Lagos igboelerin"
    }

    res.send(studentDetails)
})

app.listen(port, () =>{
    console.log("server is listening on port:" + port)
})



/*let x = 5
let y = 6
let z = 7 + 5

console.log(x + y + z)



// Function to compute the product of q1 and q2
function myFunction() {
   const result = 15 * 10
    // return resulty

    console.log({result: "here is your result" + " " + result})
}
myFunction()


const dev = (par1,par2) => {
    console.log(par1 + par2)

}

dev(7, 3)*/
