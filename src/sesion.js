
let sesionObject;
try{
sesionObject = require('../public/datos/session.json');
} catch(error) {
  sesionObject = null;
}

const sesion = !!sesionObject;

let obtenerRol = () => {
  return sesion.rol
}

let obtenerId = () => {
  return sesion.id
}

module.exports = {
  sesion,
  obtenerRol,
  obtenerId
}
