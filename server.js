const express = require("express");
const app = express();
const todoRoutes = require('./routes/todos');
require('dotenv').config();
const PORT = process.env.PORT || 4000 ;

app.use(express.json());
app.use("/api/v1",todoRoutes);

const dbConnect = require('./config/dbConnect');
dbConnect();
app.listen(PORT,() => {
    console.log("Server is running on PORT Number ",PORT);
});

app.get('/',(req,res) => {
    res.send('<h1>Hii Guys</h1>');
})