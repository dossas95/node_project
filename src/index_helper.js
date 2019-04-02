const hbs = require('hbs');
const index = require('./index.js');

hbs.registerHelper('cursos', () => {
  let content = 
  '<table class="table">\
  <thead class="thead-dark">\
    <th>Nombre</th>\
    <th>Descripción</th>\
    <th>Valor</th>\
  </thead>\
  <tbody>';
  
  index.listarCursosDisponibles().forEach(curso => {
    content = content + 
    '<tr>\
    <td>'+ curso.nombre +'</td>\
    <td>' + curso.descripcion+ '</td>\
    <td>' + curso.valor+ '</td>\
    </tr>';
  });
    
  content = content + 
  '</tbody>\
  </table>';
  return(content);
})
