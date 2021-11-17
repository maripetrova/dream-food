const express = require("express");
const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Gream food!</h1>")
})

app.listen(PORT);