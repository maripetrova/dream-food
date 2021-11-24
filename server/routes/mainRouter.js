const router = require("express").Router();
const fs = require("fs");

let data = "";
const readFile = (path) => {
    return fs.readFileSync(path, "utf8", )
}
data = readFile("./data/fruits.csv")
data = data.split("\n")
// console.log(data)

const Product = function (prArr) {
    let names = data[0].split(";");
    names.forEach((name, i) => {
        this[name] = prArr[i]
    })
}

// let first = new Product(data[1].split(";"));
// console.log(first)
const products = [];

for (let i = 1; i < data.length; i++) {
    products.push(new Product(data[i].split(";")))
}
console.log(products)

router.get("/", (req,res) => {
    res.render("index", {
        title: "Здоровый образ жизни",
        products: products
    })
})

module.exports = router;