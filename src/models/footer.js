const mongoose = require('mongoose');

// Footer Schema
const footerSchema = new mongoose.Schema({
    title: String,
    name: String
})

const Footer = new mongoose.model("Footer", footerSchema);

module.exports = Footer;