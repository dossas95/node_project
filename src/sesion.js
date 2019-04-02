const fs = require('fs');
let sesionObject;

<<<<<<< HEAD
let sesionObject;
try{
  sesionObject = require('../public/datos/session.json');
}catch(error){
=======
try{
  sesionObject = require('../public/datos/sesion.json');
} catch(error) {
>>>>>>> 05e9f40a07d6e7111dba6ad4a27db87bb73287bf
  sesionObject = null;
}

const sesion = !!sesionObject;

const crearSesion = (sesion) => {
  fs.writeFile('../public/datos/sesion.json', JSON.stringify(sesion), (err) => {
    if(err) window.location.href = '/login'
  });
}

const obtenerRol = () => {
  return sesion.rol

}

const obtenerId = () => {
  return sesion.id
}

module.exports = {
  crearSesion,
  sesion,
  obtenerRol,
  obtenerId
}
