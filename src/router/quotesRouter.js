const express = require("express");
const debug = require("debug")("app:quotesRouter");
const quoteData = require("../util/getQuoteData");
const quotesRouter = express.Router();

quotesRouter.route("/").get(async (req, res) => {
  debug("inside quotes");
  let data = await quoteData.getData();
  res.json(data);
});

quotesRouter.route("/random").get(async (req, res) => {
  debug("inside random quotes");
  let data = await quoteData.getRandomData();
  res.json(data);
});
module.exports = quotesRouter;
