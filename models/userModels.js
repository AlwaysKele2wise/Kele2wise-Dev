const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Please enter your first name'],
            select: false,
        },
        lastName: {
            type: String,
            required: [true, 'Please enter your last name'],
            select: false,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: {
                validator: (value) => validator.isEmail(value),
                message: 'Invalid email format',
            },
        },
        password: {
            type: String,
            required: [true, 'Please enter your password'],
            select: false,
        },
        confirmPassword: {
            type: String,
            required: [true, 'Please confirm your password'],
            validate: {
                validator: function (value) {
                    return value === this.password;
                },
                message: 'Passwords do not match',
            },
        },
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next;

    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;

    next();
});

// Compare provided password with the one in the database
userSchema.methods.comparePassword = async function (userPassword, dbPassword) {
    return await bcrypt.compare(userPassword, dbPassword);
};

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
