const express = require("express");
const app = express();
app.listen(3000);
app.get("/", (req, res) => {
    res.send("<h1>hello express</h1>");
});
app.get("/add-items", (req, res) => {
    res.send("<h1>add items</h1>");
});
