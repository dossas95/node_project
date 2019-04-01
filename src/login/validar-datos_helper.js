const hbs = require('hbs');
const { validarDatos } = require('./validar-datos.js');

hbs.registerHelper('validarDatosLogin', (correo, pass) => {
  let content = '';
  usuario = validarDatos(correo, pass);
  if(!!usuario){
    let rol;
    switch(usuario.rol){
      case 0:
        rol = 'Coordinador'
      case 1:
        rol = 'Docente'
      default:
        rol = 'Aspirante'
    }

    content = content + 
      '<div class="welcome">\
        Bienvenido\
      </div>\
      <div class="name">\
        ' + usuario.nombre + '\
      </div>\
      <div class="accion">\
        Realizar acciones de ' + rol + ':\
      </div>';

      if (usuario.rol == 1 || usuario.rol == 2) {
        content = content +'<a class="user-action" href="/miscursos">Ver mis cursos</a>';
      }

    return content;
  };
  content = content + 
      '<div class="face">\
        :(\
      </div>\
      <div class="message">\
        Lo sentimos, el proceso de autenticación ha fallado\
      </div>\
      <div class="login">\
        <a href="/login">Intentar de nuevo</a>\
      </div>';
  return content;
});
