// Express
const express = require('express');

// Router
const routes = express.Router();

// Model Navbar
const Detail = require('../models/details');

// Model Slider
const Slider = require('../models/slider');

// Model Banner
const Banner = require('../models/banner');

// Model Service
const Service = require('../models/service');

// Model Contact
const Contact = require('../models/contact');

// Model About
const About = require('../models/about');

// Model Gallery
const Gallery = require('../models/gallery');

// Model Footer
const Footer = require('../models/footer');

// Model Error
const Error = require('../models/error');

// Route Home
routes.get('/', async (req, res) => {

    /*
    // Navbar Data  
    try {
        const data = await Detail.find();
        res.render("index", {
            // Method 1
            brand: data[0].brand,
            brandIconUrl: data[0].brandIconUrl,
            Home: data[0].links[0].label,
            homeUrl: data[0].links[0].url,
            Services: data[0].links[1].label,
            servicesUrl: data[0].links[1].url,
            Gallery: data[0].links[2].label,
            galleryUrl: data[0].links[2].url,
            Contact: data[0].links[3].label,
            contactUrl: data[0].links[3].url
        });

    } catch (err) {
        console.log(`Error ${err}`);
    }

    */

    // Method 2  --: Sending/Changing Data Dynamically

    // Navbar Data
    const details = await Detail.find();

    // Slider Data
    const slides = await Slider.find();

    // Banner
    const banner = await Banner.find();

    // Service Data
    const service = await Service.find();

    // About Data
    const about = await About.find();

    // Footer Data
    const footer = await Footer.find();

    res.render("index", {
        details: details,    //Sending whole object
        slides: slides,
        banner: banner,
        service: service,
        about: about,
        footer: footer
    })

})


// Route Gallery
routes.get('/gallery', async (req, res) => {
    try {
        // Navbar Data
        const details = await Detail.find();

        // Gallery Data
        const gallery = await Gallery.find();

        res.render("gallery", {
            details: details,    //Sending whole object
            gallery: gallery
        })
    } catch (err) {
        console.log(`Error ${err}`);
        res.redirect('Errorpage');
    }
})


// Routes Contact Us
routes.post('/contact_us', async (req, res) => {
    try {

        const contact = new Contact({
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        })

        const data = await contact.save();
        res.redirect('/');

    } catch (err) {
        res.redirect('Errorpage');
    }

})


// Error Page
routes.get('**', async (req, res) => {

    const error = await Error.find();

    res.render("Errorpage", {
        error: error,
    });
})

module.exports = routes;