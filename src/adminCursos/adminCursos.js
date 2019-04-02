let cursos;
let usuariosInscritos;
const fs = require('fs');

const listarCursos = () => {
    try {
        cursos = require('../../public/datos/cursos.json');
        return cursos = cursos.filter(curso => curso.estado === "disponible");
      } catch (error) {
        return cursos = [];
      }
}

const listarCursosCompletos = () => {
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

const cerrarCurso = (cursoCerrado) =>{
    let cursos = listarCursosCompletos();
    var indiceCurso= cursos.findIndex(curso => curso.id === cursoCerrado);

    cursos[indiceCurso].estado = 'cerrado';
    fs.writeFile('./public/datos/cursos.json', JSON.stringify(cursos), (error) => {
        if (error) throw(error);});
}

const eliminarUsuario = (usuarioEliminar) => {
    let registros = listarUsuariosInscritos();
    var indice= registros.findIndex(usuario => usuario.id === usuarioEliminar);

    registros.splice(indice, 1);

    fs.writeFile('./public/datos/registros.json', JSON.stringify(registros), (error) => {
        if (error) throw(error);});
}

module.exports = {
    listarUsuarios,
    listarUsuariosInscritos,
    listarCursos,
    printCurso,
    cerrarCurso,
    listarCursosCompletos,
    eliminarUsuario
}
