const router = require("express").Router();
const fs = require("fs");

let data = "";
const readFile = (path) => {
    return fs.readFileSync(path, "utf8", )
}
data = readFile("./data/fruits.csv")
data = data.split("\n")
// console.log(data)

let titleNames = data[0].split(";");

const Product = function (prArr) {
    let names = data[0].split(";");
    names.forEach((name, i) => {
        this[name] = prArr[i]
    })
}

const products = [];

for (let i = 1; i < data.length; i++) {
    products.push(new Product(data[i].split(";")))
}
// console.log(products)

router.post("/add", (req, res) => {
    console.log(req.body) // Получить тело формы
    res.send({msg: "done"})
})

router.get("/", (req,res) => {
    res.render("index", {
        title: "Здоровый образ жизни",
        products: products,
        titleNames: titleNames
    })
})

module.exports = router;