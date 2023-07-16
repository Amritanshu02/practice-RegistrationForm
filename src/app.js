const express = require("express");
require("../src/db/db.js");
const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    console.log("Home page");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});