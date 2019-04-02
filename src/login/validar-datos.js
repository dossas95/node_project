const fs = require('fs');

const cargarDatos = (path) => {
  try {
    const data= require(`../../public/datos/${path}`);
    return data;
  } catch(error){
    return undefined;
  }
}

const validarDatos = (correo, pass) => {
  let usuarios = [];
  usuarios = [...cargarDatos('usuarios.json')];
  const usuario = usuarios.find(usuario => usuario.correo == correo && usuario.contrasena == pass);
  if(usuario != undefined){
    try{
      crearSesion(usuario);
    } catch(err){
      return false;
    }
    return usuario;
  } else {
    try {
      sesion = {...cargarDatos('sesion.json')};
      if(sesion != undefined){
        usuarios = [...cargarDatos('usuarios.json')];
        const usuario = usuarios.find(usuario => usuario.id == sesion.id);
        if(usuario != undefined){
          return usuario;
        }
        return false;
      }
      return false;
    } catch(error){
      return false;
    }
  }
}

const crearSesion = (usuario) => {
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
