require("dotenv").config();
const express = require('express');
const app = express();
const usersRouter = require('./routes/usersRouter');


  


app.set("view engine", "ejs");
const path = require("path");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", usersRouter);

app.get("/ping", (req, res) => {
    res.send("pong from Railway!");
  });
  

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Express app listening on port: ${PORT}`));









