const mongoose = require("mongoose");


// Navbar Details Schema
const detailSchema = new mongoose.Schema({
    brandName: {
        type: String,
    },
    brandIconUrl: {
        type: String
    },
    links: [{
        label: {
            type: String
        },
        url: {
            type: String
        }
    }]
})

// Navbar Details Model
const Detail = new mongoose.model("Detail", detailSchema);

module.exports = Detail;