const mongoose = require('mongoose');



const userSchema = mongoose.Schema(
    {
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            // match: 
            // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\]))$/*/
        },
        password: {type: String, required: true},
    },

    {timestamps: true}
);

module.exports = mongoose.model("Users", userSchema);