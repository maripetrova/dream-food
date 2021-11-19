const router = require("express").Router();

router.get("/", (req,res) => {
    res.render("index", {
        title: "Здоровый образ жизни"
    })
})

module.exports = router;