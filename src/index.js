let cursos;

const listarCursosDisponibles = () => {
  try {
    cursos = require('../public/datos/cursos.json');
    return cursos = cursos.filter(curso => curso.estado === "disponible");
  } catch (error) {
    return cursos = [];
  }
};

const usuariosInscritos = () => {
  try {
    registros = require('../public/datos/registros.json');
    return registros;
  }catch (error){
    return registros = [];
  }
}
module.exports = {
  listarCursosDisponibles,
  usuariosInscritos
}
