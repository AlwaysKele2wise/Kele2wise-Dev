const nodemailer = require('nodemailer');
const otp = require('./otpGenerator')
//const asyncErrorHandler = require('../Middleware/errorHandler');

exports.welcomeUser = async (email, firstName) => {
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        service: true,
        auth: {
            user: "alwayskele2wise@gmail.com",
            pass: "zfbprqgywealamsh"
        }
    });

    const mailOptions = {
        from: "alwayskele2wise@gmail.com",
        to: email,
        subject: 'Welcome to Opex',
        text: `Hi ${user.firstName} ${user.lastName}, \n\nWelcome to Opex, your OTP : ${otp}\n\nThank you`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);

};

// module.exports = mailer;