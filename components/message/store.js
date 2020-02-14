const db = require("mongoose");
const Model = require("./model");
//conexion de base de datos
//mongodb:user:admin@localhost:27017/telegram
//const list = [];

db.Promise = global.Promise;
db.connect("mongodb://localhost:27017/telegram", {
  useNewUrlParser: true
});
console.log("[db] Conectada con éxito");

function addMessage(message) {
  //list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  //return list;
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessages
};
