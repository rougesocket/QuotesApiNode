const express = require("express");
const debug = require("debug")("app");

const app = express();
const PORT = process.env.PORT;
require("dotenv").config();

const quotesRouter = require("./src/router/quotesRouter");

app.use("/api/quote/", quotesRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  debug(`listening to port ${PORT}`);
});
