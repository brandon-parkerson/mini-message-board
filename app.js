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

// Run server
app.listen(3005, () => {
    console.log("Listening on port 3005");
});

// Index 
app.get("/", (req, res) => {
    res.render("index", {messages : messages});
});

app.get("/new", (req, res) => {
    res.send("new")
})
