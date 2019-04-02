const fs = require('fs');
let sesionObject;

try{
  sesionObject = require('../public/datos/sesion.json');
} catch(error) {
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
