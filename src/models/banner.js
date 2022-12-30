const mongoose = require('mongoose');

// Banner Schema
const bannerSchema = new mongoose.Schema({
    title: String,
    desc: String,
    btn: String,
    url: String
})

const Banner = new mongoose.model("Banner", bannerSchema);

module.exports = Banner;