const express = require("express");
const debug = require("debug")("app");

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  debug(`listning to port ${PORT}`);
});
