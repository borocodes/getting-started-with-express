const express = require("express");
const morgan = require("morgan");

const app = express();

module.exports = app;

const sayHello = (req, res, next) => {
  res.send("Hello!");
};

app.use(morgan("dev"));
app.use(sayHello);
