const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const path = require("path")

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router); //localhost:5000/books



mongoose
    .connect("mongodb+srv://admin:eoSNggq0dTPVknN0@cluster0.f4zjpud.mongodb.net/bookStore?retryWrites=true&w=majority")
    .then(() => console.log("Connected to database"))
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));

//  database password -   eoSNggq0dTPVknN0


