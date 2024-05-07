// Imports small array of users
// Pretend it's an API request
const users = require("./data.js");
//const ID = 3;
function getUsers(ID){
  console.log("Leyendo ID...");
getUserById(ID)
.then((id) => {
  const newUser = getUser(ID);
  console.log('Recibiendo Usuario: ',newUser.username);
})
.catch((err) => console.error(`Error during promise: ${err}`));
}
//console.log(users);
// Fetches all users
/*function getUserById(id) {
  return new Promise((resolve, reject) => {
    console.log(`Se recibió el ID ${id}`)
      setTimeout(() => {
        //console.log(`Usuario con el ID ${id}: encontrado`);
        resolve('Aquí esta el usuario: ');
      }, 3000)
  });
}*/
function getUserById(id) {
  return new Promise(function(resolve, reject) {
    console.log(`Se recibió el ID ${id}`)
    setTimeout(() => {
        //console.log(`Usuario con el ID ${id}: encontrado`);
      resolve('Aquí esta el usuario: ');
      }, 3000)
    setTimeout(() => {
      reject('Usuario no encontrado');
    }, 3000)
  });
}


/*const getUsers = () => {
  return users;
};*/

// Filters users by specific ID
const getUser = (id) => {
  return users.find((e) => e.id === id);
};

// test
//console.log(getUser(ID));
//console.log(getUser(3));
//getUsers(3);
getUserById(3);
//module.exports = getUsers;
module.exports = { getUser, getUserById, getUsers };