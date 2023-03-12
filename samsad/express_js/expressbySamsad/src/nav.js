const express = require("express");
const app = express();
const port = 3000
app.get ("/" , (req , res) =>{
res. write ("<h1>hello world welcome to my home page</h1>")
res. write ("<h1>hello world welcome to my home page</h1>")
res.send ();
});
app.get ("/about" , (req , res) =>{
    res.send ("hello world welcome to my about page")
    });
    app.get ("/contect" , (req , res) =>{
        res.send ("hello world welcome to my contect page")
        });
        // app.get ("/temp" , (req , res) =>{
        //     res.send ([
        //         {
                
        //         id: 1,
        //         name: "samsad",
            
        //     },
        //     {
                
        //         id: 1,
        //         name: "samsad",
            
        //     },
        //     {
                
        //         id: 1,
        //         name: "samsad",
            
        //     },
        //     {
                
        //         id: 1,
        //         name: "samsad",
            
        //     }
        // ]);
        //     });


            app.get ("/temp" , (req , res) =>{
                res.json ([
                    {
                    
                    id: 1,
                    name: "samsad",
                
                },
                {
                    
                    id: 1,
                    name: "samsad",
                
                },
                {
                    
                    id: 1,
                    name: "samsad",
                
                },
                {
                    
                    id: 1,
                    name: "samsad",
                
                }
            ]);
                });
app.listen(3000, ()=>{
    console.log(`listing to the port no ${port}`);
});