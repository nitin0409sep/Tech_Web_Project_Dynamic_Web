// Express
const express = require("express");

// App
const app = express();

// DB
require('./db/conn');

// Port
const port = process.env.PORT || 80;

// Routes
const routes = require('./routes/routes')

// Path 
const path = require('path');

// HBS - HandelBars
const hbs = require('hbs');

// Middleware to parse data coming from client side 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files Path
const static_path = path.join(__dirname, "../public");

// Views Dir Path
const views_path = path.join(__dirname, "../temp/views");

// Partials Dir Path
const partials_path = path.join(__dirname, "../temp/partials");

// Static Files Middleware
app.use('/public', express.static(static_path));

// View Engine
app.set("view engine", "hbs");

// Views Directory
app.set("views", views_path);

// Partials Directory
hbs.registerPartials(partials_path);

// Routes Use
app.use('', routes);

// Listen Server 
app.listen(port, () => {
    console.log(`Server has started at port : ${port}`);
})