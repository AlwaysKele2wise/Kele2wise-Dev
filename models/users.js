const mongoose = require('mongoose');


const userSchema = mongoose.Schema(
    {
        "email": {
            "type": String,
            "required": true,
            "unique": true,
            "lowercase": true,
            "match": /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        },
    
        password: {type: String, required: true},
    },

 {timestamps: true}
);

module.exports = mongoose.model("Users", userSchema);