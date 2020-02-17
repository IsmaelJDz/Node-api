const db = require("mongoose");

db.Promise = global.Promise;

//"mongodb://localhost:27017/telegram"
async function connect(url) {
  await db.connect(url, {
    useNewUrlParser: true
  });
  console.log("[db] Conectada con éxito");
}

module.exports = connect;
