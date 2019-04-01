
let sesionObject;
try{
  sesionObject = require('../public/datos/sesion.json');
}catch{
  sessionObject=null;
}

const sesion =!! sesionObject;

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
