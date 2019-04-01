
let sesion;
sesion = require('../public/datos/session.json');
const sesion = !!sesion;

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
