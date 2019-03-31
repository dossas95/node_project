const hbs = require('hbs');
const index = require('./index.js');

hbs.registerHelper('cursos', () => {
  return(index.listarCursosDisponibles());
})
