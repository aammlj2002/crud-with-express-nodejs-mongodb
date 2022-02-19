const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.listen(3000);
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
