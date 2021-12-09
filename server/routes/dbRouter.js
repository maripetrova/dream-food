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


router.get("/vegetables", (req, res) => {
    let client = db();
    client.connect(err => {
        if (err) {
            res.send({"msg": "Connection error"});
            client.close();
        } else {
            const table = client.db("dreamFood");
            const col = table.collection("products");
            col.find({
                "type": "Овощи"
            }).toArray( (error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(data);
                    res.send({"data": data});
                    client.close();
                }
            });
        }
    });
});


module.exports = router;




