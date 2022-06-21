// setup mongoose connection
const mongoose = require("mongoose");
var mongoDB = process.env.MONGO_DB_TEST_URI
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.on("open", function () {
    console.log("Connected to MongoDB database.")
})
