const express = require("express");
const debug = require("debug")("app:quotesRouter");

const quotesRouter = express.Router();

quotesRouter.route("/").get((req, res) => {
  debug("inside quotes");
  res.send("this gives some random quotes");
});
module.exports = quotesRouter;
