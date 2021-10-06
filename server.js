const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();
require("dotenv").config();

// calling function that connect with the database
connectDB();
app.use(express.json());
app.use("/api/user", require("./router/user"));
const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`server is running on port number ${PORT}`)
);
