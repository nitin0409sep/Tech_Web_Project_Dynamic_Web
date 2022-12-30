const mongoose = require('mongoose');

// About Schema
const errorSchema = new mongoose.Schema({
    Oops: String,
    status: String,
    msg: String,
    btn: String
})

const Error = new mongoose.model("Error", errorSchema);

module.exports = Error;