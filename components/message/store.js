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
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  });

  foundMessage.message = message;
  const newMesage = await foundMessage.save();
  return newMesage;
}

function removeMessage(id) {
  console.log(id);
  return Model.deleteOne({
    _id: id
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage
};
