const mongoose = require('mongoose');

// Validator
const validator = require('validator');


// Contact Schema
const contactSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    message: {
        type: String,
        required: true
    }
})

const Contact = new mongoose.model("Contact", contactSchema);

module.exports = Contact;