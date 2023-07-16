const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/practiceRegisterForm", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected!");
}).catch((e) => {
    console.log(e);
})