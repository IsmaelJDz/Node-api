const db = require("mongoose");
const Model = require("./model");
//conexion de base de datos
//mongodb:user:admin@localhost:27017/telegram

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };
    }
    Model.find(filter)
      //metodo que busca dentro de cada elemento que saquemos de la collecion de mongo
      //object id y tenemos que decirle que campo y "ejecutar"
      .populate("user")
      .exec((err, populated) => {
        if (err) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
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
