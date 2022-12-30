const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    iconUrl: {
        type: String
    },
    title: {
        type: String
    },
    subTitle: {
        type: String
    },
    linkText: {
        type: String,
    },
    link: {
        type: String
    }
})

const Service = new mongoose.model("Service", serviceSchema);

module.exports = Service;