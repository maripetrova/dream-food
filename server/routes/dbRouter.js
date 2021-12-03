// mongodb+srv://maripetrova:<password>@cluster0.lrdlp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const router = require("express").Router();
const db = require("./db.js");




router.post("/add", (req, res) => {
    console.log(req.body)
    let client = db();
    client.connect(err => {
        if (err) {
            // aaaaa
        } else {
            const table = client.db("dreamFood");
            const col = table.collection("products");
            col.insertOne(req.body, err => {
                if (err) {
                    console.log(err);
                    client.close();
                } else {
                    client.close();
                }
            });

        }
    })

    res.send({msg: "done"})
})


module.exports = router;




