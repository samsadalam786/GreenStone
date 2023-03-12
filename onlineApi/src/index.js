
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs")
const port = 4000;


// this line of code is called from the websit public folder=============

const staticPath = path.join(__dirname, "../public");

// this line of code is called from the websit public folder=============
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
// to set the viwes ingine========================================================================
app.set("view engine", "hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);

// this line of code is called from the websit public folder=============
app.use(express.static(staticPath));
// this line of code is called from the websit public folder=============


// template engine route============
app.get("/", (req, res) => {
res.render('index');
});
// for the about page=================
app.get ("/MOCK TESTS", (req , res ) => {
    res.render("mock test");
    });
// for the contact page=================
    // app.get ("/contact", (req , res ) => {
    //     res.render("contact");
    //     });
// for the services page=================
        // app.get ("/services", (req , res ) => {
        //     res.render("services");
        //     });


            // for the project page=================
        // app.get ("/project", (req , res ) => {
        //     res.render("project");
        //     });

            
// app.get ("*", (req , res ) => {
// res.render("404",{
//     errorcomemnt :"404 oppes page not found"
// });
// });

app.listen (port, () => {
    console.log(`listing to the port ${port}`);
}); 


