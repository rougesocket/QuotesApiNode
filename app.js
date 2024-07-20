const express = require("express");
const debug = require("debug")("app");

const app = express();
const PORT = process.env.PORT;

const quotesRouter = require("./router/quotesRouter");

app.use("/api/quote/", quotesRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  debug(`listening to port ${PORT}`);
});
