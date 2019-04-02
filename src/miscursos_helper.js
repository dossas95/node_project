const hbs = require('hbs');
const miscursos = require('./miscursos.js');

hbs.registerHelper('miscursos', () => {
  let content = 
  '<table class="table">\
  <thead>\
    <th>ID</th>\
    <th>Nombre del curso</th>\
    <th>s</th>\
  </thead>\
  <tbody>';
  miscursos.listarMisCursos().forEach(curso => {
      console.log('lalalalala');
    content = content + 
    '<tr>\
    <td>'+ curso.id +'</td>\
    <td>' + curso.nombre+ '</td>\
    <td>' +'<h4 onclick="document.location.href='+"'salir/"+curso.id+"'"+'">login</h4></td>\
    </tr>';
  });
    
  content = content + 
  '</tbody>\
  </table>';
  return(content);
})