const express = require("express");
const { default: mongoose } = require("mongoose");
const env = require("./env");
const app = express();
mongoose
    .connect(env.mongodbServer)
    .then(() => {
        console.log("connected");
        app.listen(3000);
    })
    .catch((err) => console.log(err));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    let items = [
        { name: "mobile phone", price: "30" },
        { name: "laptop", price: "80" },
        { name: "book", price: "10" },
    ];
    res.render("index", { items });
});
app.get("/add-items", (req, res) => {
    res.render("add-items");
});
app.use((req, res) => {
    res.render("404");
});
