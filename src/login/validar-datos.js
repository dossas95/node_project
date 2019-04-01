const fs = require('fs');

const validarDatos = (correo, pass) => {
  let usuarios = [];
  try {
    usuarios = require('../../public/datos/usuarios.json');
  } catch(error){
    return false;
  }
  const usuario = usuarios.find(usuario => usuario.correo == correo && usuario.contrasena == pass);
  if(usuario != undefined){
    try{
      crearsesion(usuario);
    } catch(err){
      return false;
    }
    return usuario;
  } else {
    return false;
  }
}

const crearsesion = (usuario) => {
  const sesion ={
    rol: usuario.rol,
    id: usuario.id
  }
  fs.writeFile('./public/datos/sesion.json', JSON.stringify(sesion), (err) => {
    if (err) throw (err);
  });
}

module.exports = {
  validarDatos
}
