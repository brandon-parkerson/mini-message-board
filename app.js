require("dotenv").config();
const express = require('express');
const app = express();
const usersRouter = require('./routes/usersRouter');


  


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));
app.use("/", usersRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Express app listening on port: ${PORT}`));









