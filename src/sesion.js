const fs = require('fs');
let sesionObject;

const cargarSesion = () => {
  try{
    sesionObject = require('../public/datos/sesion.json');
  } catch(error) {
    sesionObject = null;
  }
}

cargarSesion();
const sesion = !!sesionObject;


const obtenerRol = () => {
  cargarSesion();
  console.log(sesionObject.rol);
  return sesionObject.rol;
}

const obtenerId = () => {
  cargarSesion();
  return sesionObject.id;
}

const eliminarSesion = () => {
  fs.writeFile('./public/datos/sesion.json', '', (err) => {
    if (err) return false;
  });

  cargarSesion();
  return !!sesionObject;
};

module.exports = {
  sesion,
  obtenerRol,
  obtenerId,
  eliminarSesion
}
