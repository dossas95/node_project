let cursos;
let usuariosInscritos;

const listarCursos = () => {
    return cursos = require('../../public/datos/cursos.json');
}

const listarUsuariosInscritos = () => {
    return usuariosInscritos = require('../../public/datos/registros.json');
}

const listarUsuarios = () => {
    return usuarios = require('../../public/datos/usuarios.json');
}

const printCurso = () => {
    console.log("hola");
}

module.exports = {
    listarUsuarios,
    listarUsuariosInscritos,
    listarCursos,
    printCurso
}
