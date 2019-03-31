let cursos;

const listarCursosDisponibles = () => {
  try {
    cursos = require('../public/datos/cursos.json');
    return cursos = cursos.filter(curso => curso.estado === "disponible");
  } catch (error) {
    return cursos = [];
  }
};

module.exports = {
  listarCursosDisponibles,
  test
}
