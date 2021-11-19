const express = require("express");
const PORT = process.env.PORT || 3000;
const serverRouter = require("./server/routes/mainRouter")
const app = express();
const stylus = require("stylus")


app.use(stylus.middleware({
    src: "./public",
    dest: "./public"
}));

app.set("views", "./server/views")
app.set("view engine", "pug")

app.use(express.static("./public"))

app.use("/", serverRouter)

app.listen(PORT);