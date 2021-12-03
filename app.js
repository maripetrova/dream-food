const express = require("express");
const PORT = process.env.PORT || 3000;
const serverRouter = require("./server/routes/mainRouter")
const app = express();
const stylus = require("stylus")
const dbRouter = require("./server/routes/dbRouter");

app.use(stylus.middleware({
    src: "./public",
    dest: "./public"
}));
app.use(express.json());

app.set("views", "./server/views")
app.set("view engine", "pug")

app.use(express.static("./public"))

app.use("/", serverRouter);
app.use("/api", dbRouter);

app.listen(PORT);