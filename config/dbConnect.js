const mongoose = require('mongoose');
require('dotenv').config();
const db_url = process.env.DATABASE_URL;

const dbConnect = () => {
    mongoose.connect(db_url)
    .then(() => console.log("Database is Connected "))
    .catch((error) => {
        console.log("Connection Failed :- ",error.message);
        process.exit();
    });
}

module.exports = dbConnect;