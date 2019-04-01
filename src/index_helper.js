const hbs = require('hbs');
const index = require('./index.js');

hbs.registerHelper('cursos', () => {
  let content = 
  '<table class="table">\
  <thead>\
    <th>fsdfdsf</th>\
    <th>dsfsdfds</th>\
  </thead>\
  <tbody>';

  index.listarCursosDisponibles().forEach(curso => {
    content = content + 
    '<tr>\
    <td>'+ curso.id +'</td>\
    <td>' + curso.nombre+ '</td>\
    </tr>';
  });
    
  content = content + 
  '</tbody>\
  </table>';
  return(content);
})
