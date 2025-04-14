const path = require('node:path');
const express = require('express');
const app = express();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  


// Set ejs as the template engine and where to look at view files
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// To parse data from the post request of a new message
app.use(express.urlencoded({ extended: true }));


// Run server
app.listen(3005, () => {
    console.log("Listening on port 3005");
});

// Index 
app.get("/", (req, res) => {
    res.render("index", {messages : messages});
});

// get new message req
app.get("/new", (req, res) => {
    res.render("form");
});

// post new message
app.post("/new", (req, res) => {
    // parse data from inputs
    const name = req.body.name;
    const message = req.body.message;
    messages.push({ text : message, user : name, added : new Date() } );
    // send user back to index
    res.redirect('/');
});
