const users = require("./data.js");

function getUsers(ID){
  console.log("Leyendo ID...");
getUserById(ID)
.then((id) => {
  const newUser = getUser(ID);
  console.log('Recibiendo Usuario: ',newUser.username);
})
.catch((err) => console.error(`Error during promise: ${err}`));
}

function getUserById(id) {
  return new Promise(function(resolve, reject) {
    console.log(`Se recibió el ID ${id}`)
    setTimeout(() => {
      resolve('Aquí esta el usuario: ');
      }, 3000)
    setTimeout(() => {
      reject('Usuario no encontrado');
    }, 3000)
  });
}

const getUser = (id) => {
  return users.find((e) => e.id === id);
};

getUserById(3);

module.exports = { getUser, getUserById, getUsers };