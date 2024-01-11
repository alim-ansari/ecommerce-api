const express = require("express");
const path = require("path");
const userRouter = require("./routers/user");
const itemRouter = require("./routers/item");
require("dotenv").config();
require("./db/mongoose");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(itemRouter);

const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send("Invalid Request: 404 Error");
});

module.exports = app;
