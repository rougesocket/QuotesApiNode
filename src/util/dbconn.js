const { MongoClient } = require("mongodb");
const debug = require("debug")("app:util:dbconn");

async function getConnection() {
  const url = process.env.DB_URL;
  let client;
  try {
    client = await MongoClient.connect(url);
    debug("Connected to database");
    return client;
  } catch (error) {
    debug(error);
  }
}

module.exports = getConnection;
