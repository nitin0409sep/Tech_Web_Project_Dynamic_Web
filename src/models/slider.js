const mongoose = require("mongoose");


// Slider Details Schema
const sliderSchema = new mongoose.Schema({
    slideTitle: {
        type: String
    },
    slideSubTitle: {
        type: String
    },
    imgUrl: {
        type: String
    },
    class: {
        type: String
    }
})

// Navbar Details Model
const Slider = new mongoose.model("Slider", sliderSchema);

module.exports = Slider;