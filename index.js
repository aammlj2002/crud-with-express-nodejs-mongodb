const express = require("express");
const mongoose = require("mongoose");
const Item = require("./models/items");
const env = require("./env");
const app = express();
app.use(express.urlencoded({ extended: true }));
mongoose
    .connect(env.mongodbServer)
    .then(() => {
        console.log("connected");
        app.listen(3000);
    })
    .catch((err) => console.log(err));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.redirect("/get-items");
});
app.get("/get-items", (req, res) => {
    Item.find()
        .then((result) => res.render("index", { items: result }))
        .catch((err) => res.send(err));
});
app.get("/get-item", (req, res) => {
    Item.findById("621102b47e054d068e6658a1")
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
});
app.post("/items", (req, res) => {
    const item = Item(req.body);
    item.save()
        .then(() => {
            res.redirect("/get-items");
        })
        .catch((err) => {
            console.log(err);
        });
});
app.get("/items/:id", (req, res) => {
    const id = req.params.id;
    Item.findById(id).then((result) => {
        res.render("item-detail", { item: result });
    });
});
app.get("/add-items", (req, res) => {
    res.render("add-items");
});
app.delete("/items/:id", (req, res) => {
    const id = req.params.id;
    Item.findByIdAndDelete(id).then((result) => {
        res.json({ redirect: "/get-items" });
    });
});
app.use((req, res) => {
    res.render("404");
});
