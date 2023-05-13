const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const path = require("path")
require("dotenv").config();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router); 
app.use(express.static("../book_store/build"));



mongoose
    .connect(process.env.MONGOURI)
    .then(() => console.log("Connected to database"))
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,"..", "book_store", "build", "index.html"));
    });




