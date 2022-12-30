const mongoose = require('mongoose');

// About Schema
const aboutSchema = new mongoose.Schema({
    title: String,
    desc: String,
    btn: String
})

const About = new mongoose.model("About", aboutSchema);

module.exports = About;