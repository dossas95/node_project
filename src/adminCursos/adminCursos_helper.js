const hbs = require('hbs');
const admin = require('./adminCursos');

hbs.registerHelper('usuariosPorCurso', () => {
    let id;
    let content='<div class="list-group">\
    <a class="list-group-item ">';

    admin.listarCursos().forEach(curso => {
        content = content + '<div class="list-group-item">\ <h4>Curso ' + 
        curso.id + ': ' + curso.nombre + '</h4>\
         <button type="button" class="btn btn-success" onClick="printCurso()">Cerrar Curso</button>\ </div>';
        id= curso.id;
        admin.listarUsuariosInscritos().forEach(registro => {
            if (registro.curso === id) {
                admin.listarUsuarios().forEach(informacion => {
                    if(informacion.id === registro.participante){
                        content = content + '<p class="list-group-item-text"> Nombre del usuario: ' + informacion.nombre + '</p>';
                    }
                })
            }
        });
    });
    content = content +  '</a>\ </div>';
    return content;
});
