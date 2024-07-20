const debug = require("debug")("app:util:getQuoteData");
const dbconn = require("./dbconn");

async function getData() {
  try {
    const client = await dbconn();
    const dbName = process.env.DB_NAME;
    const db = client.db(dbName);
    const res = await db
      .collection(process.env.COLLECTION_NAME)
      .find()
      .toArray();
    return res;
  } catch (error) {
    debug(error);
  }
}

async function getRandomData() {
  try {
    const client = await dbconn();
    const dbName = process.env.DB_NAME;
    const db = client.db(dbName);
    const res = await db
      .collection(process.env.COLLECTION_NAME)
      .aggregate([{ $sample: { size: 1 } }])
      .toArray();
    return res;
  } catch (error) {
    debug(error);
  }
}

module.exports = {
  getData,
  getRandomData,
};
