const connectDB = () => {
    const MongoClient = require("mongodb").MongoClient;
    const userName = process.env.DBNAME || "petrushkina";
    const pwd = process.env.DBPASS || "10102020";
    const uri = `mongodb+srv://${userName}:${pwd}@cluster0.lrdlp.mongodb.net/dreamFood?retryWrites=true&w=majority`; // После / идет название базы данных вроде
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;