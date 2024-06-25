const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
    {
      FirstName: {
        type : String,
        required : [true, 'Please Enter your First Name'],
        select : false
    },
    LastName: {
      type : String,
      required : [true, 'Please Enter your Last Name'],
      select : false
  },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      },
      password: {
        type : String,
        required : [true, 'Please Enter your password'],
        select : false
    },
    confirmPassword : {
        type : String,
        required : [true, 'Please Confirm your password'],
        validate : {
            validator : function(value) {
                return value == this.password
            },
            message : "Passwords do not match"
        }
    }
      // password: { type: String, required: true },
     
    },
    { timestamps:true}
  );

  userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next;

    this.password = await bcrypt.hash(this.password, 12);
    
    this.confirmPassword = undefined; 

    next();
})

//Comparing password provided for logging with password in the database
userSchema.methods.comparePassword = async function(userPassword, dbPassword) {
    return await bcrypt.compare(userPassword, dbPassword)
}


const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;