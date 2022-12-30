// Mongoose 
const mongoose = require('mongoose');

// Model - Navbar
const Detail = require('../models/details');

// Model - Slider
const Slider = require('../models/slider');

// Model - Banner
const Banner = require('../models/banner');

// Model - Service
const Service = require('../models/service');

// Model - About
const About = require('../models/about');

// Model - Footer
const Footer = require('../models/footer');

// Model - Gallery
const Gallery = require('../models/gallery');

// Model - Error
const Error = require('../models/error');

// Deprecate Warning
mongoose.set('strictQuery', false)

//Connection
mongoose.connect("mongodb://127.0.0.1:27017/dynamicWeb").then(async () => {
    console.log("Connection Successfull")

    // Once saving data in DB for Navbar
    try {
        const data = new Detail({
            brandName: "Tech_View",
            brandIconUrl: "https://yt3.googleusercontent.com/v_PwNTRdcmpaEU6zh9wytm0ERtq2BOAmBQvr1QyZstphlpcPUqjbX3wqIvSRR9bWIgSjmRUJcwE=s176-c-k-c0x00ffffff-no-rj",
            links: [{
                label: "Home",
                url: "/"
            }, {
                label: "Services",
                url: "/services"
            },
            {
                label: "Gallery",
                url: "/gallery"
            },
            {
                label: "Contact Us",
                url: "/contact"
            }]
        })

        // const result = await data.save();

    } catch (err) {
        console.log(`Error ${err}`);
    }

    // Once saving data in DB for Slider 
    try {
        const data1 = new Slider({
            slideTitle: "Pic 1",
            slideSubTitle: "Tech",
            imgUrl: "/public/images/sb1.jpg",
            class: "active"
        })

        const data2 = new Slider({
            slideTitle: "Pic 2",
            slideSubTitle: "Tech",
            imgUrl: "/public/images/sb2.jpg"
        })

        // const result = await Slider.insertMany([data1, data2]);

    } catch (err) {
        console.log(`Error ${err}`);
    }


    // Once saving data in DB for Service 
    try {
        const data1 = new Service({
            iconUrl: "fa-brands fa-accusoft",
            title: "Provide Best Courses",
            subTitle: "We provide courses that helps our students in learning and in placement.",
            linkText: "https://www.google.com",
            link: "Check"
        })

        const data2 = new Service({
            iconUrl: "fa-brands fa-affiliatetheme",
            title: "Software Development",
            subTitle: "We provide courses that helps our students in learning and in placement.",
            linkText: "https://www.google.com",
            link: "Learn"
        })

        const data3 = new Service({
            iconUrl: "fa-brands fa-accusoft",
            title: "Support for Projects",
            subTitle: "We provide courses that helps our students in learning and in placement.",
            linkText: "https://www.google.com",
            link: "Check"
        })


        // const result = await Service.insertMany([data1, data2, data3]);
    } catch (err) {
        console.log(`Error ${err}`);
    }


    // Once saving data in DB for Banners    
    try {
        const data1 = new Banner({
            title: "Start Learning New Technology here!!",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta repellat, esse numquam error atque at natus. Blanditiis ipsa asperiores consequatur libero, adipisci aliquam officia cumque aliquid neque nam molestiae vel.",
            btn: "Start Learning",
        })

        const data2 = new Banner({
            title: "We work for people, not for money",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod veritatis in quaerat, vel aliquam inventore quo nihil placeat consequatur possimus tempore aut. Esse molestias rem obcaecati repellendus, distinctio quod dolorum.",
            btn: "Click Here",
            url: "/public/images/b1.png"
        })

        const data3 = new Banner({
            title: "We work for people, not for money",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod veritatis in quaerat, vel aliquam inventore quo nihil placeat consequatur possimus tempore aut. Esse molestias rem obcaecati repellendus, distinctio quod dolorum.",
            btn: "Click Here",
            url: "/public/images/b2.png"
        })

        // const result = await Banner.insertMany([data1, data2, data3]);

    } catch (err) {
        console.log(`Error ${err}`);
    }



    // Once saving data in DB for About    
    try {
        const data = new About({
            title: "About this site",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolor dolores reprehenderit vitae obcaecati ducimus blanditiis quisquam. Labore, animi, sunt ullam doloribus voluptas cupiditate praesentium aliquid esse dolorum quibusdam libero illo earum laudantium! A dignissimos unde blanditiis! Atque nisi quae commodi quibusdam perspiciatis. Distinctio nam totam quam eos, officia veniam itaque ex, dolorum similique tenetur aperiam repudiandae eius beatae neque est iusto cumque facilis explicabo! Consequuntur pariatur suscipit repellendus itaque. Dolorem maxime ea numquam repellat nisi harum voluptates, sunt magni.",
            btn: "Contact Us"
        })

        // const result = await data.save();

    } catch (err) {
        console.log(`Error ${err}`);
    }


    // Once saving data in DB for Footer    
    try {
        const data = new Footer({
            title: "@2022 Copyright : ",
            name: "Nitin 😎"
        })

        // const result = await data.save();

    } catch (err) {
        console.log(`Error ${err}`);
    }


    // Once saving data in DB for Gallery    
    try {
        const data = new Gallery({
            url: "/public/images/Gallery/1.jpg"
        })

        // const result = await data.save();

    } catch (err) {
        console.log(`Error ${err}`);
    }

    // Once saving data in DB for Error    
    try {
        const data = new Error({
            Oops: "Oops",
            status: "404 Not Found",
            msg: "Sorry, an error has occured, Requested page not found!",
            btn: "Take Me Home"
        })

        const result = await data.save();

    } catch (err) {
        console.log(`Error ${err}`);
    }

    /*Moongoose Catch Error */
}).catch((err) => {
    console.log(`Error ${err}`);
})