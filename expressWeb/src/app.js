const express = require('express');
const path = require("path");
const app = express();
const port = 8000;

// public static path==================
const static_path = (path.join(__dirname, "../public"));




app.set("view engine", "hbs");
app.use(express.static(static_path));


// routing==========================
app.get(" ", (req , res)=>{
res.render("index");
});

app.get("/about", (req , res)=>{
    res.render("about");
    });

    app.get("/wather", (req , res)=>{
        res.render("welcome to wather greenstone software");
        });

        app.get("/contact", (req , res)=>{
            res.render("contact");
            });

            app.get("*", (req , res)=>{
                res.render("404 error page greenstone software");
                });

app.listen(port , ()=>{
console.log(`listing to the port ${port}`);
});