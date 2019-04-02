const hbs = require('hbs');
const admin = require('./adminCursos');

hbs.registerHelper('usuariosPorCurso', () => {
    let id;
    let content='<div class="list-group">\
    <a class="list-group-item ">';

    admin.listarCursos().forEach(curso => {
        content = content + '<div class="list-group-item">\ <h4 >Curso ' + 
        curso.id + ': ' + curso.nombre + '</h4>\
         <button type="button" class="btn btn-success" onClick="document.location.href='+"'cerrar/"+
         curso.id+"'"+'">Cerrar Curso</button>\  <h5 <span class="small">' + 'Estado: ' + '<i>' + curso.estado + '</i>\ </span>\ </h5>' +
         '<h5 style="color:3a9679;"> Usuarios Inscritos: </h5>';
        id= curso.id;
        admin.listarUsuariosInscritos().forEach(registro => {
            if (registro.curso === id) {
                admin.listarUsuarios().forEach(informacion => {
                    if(informacion.id === registro.participante){
                        content = content + '<p class="list-group-item-text">\ <b> Nombre: </b>' + informacion.nombre + 
                        '<br>\ <b> Correo: </b>' + informacion.correo + '<br>\ <b> Teléfono: </b>' + informacion.phone + '</br>';
                        if(!registro.interes){
                            content = content + '<span class="small">El usuario ya no está interesado en el curso: <button type="button" class="btn btn-danger btn-sm" onClick="document.location.href='+"'eliminar/"+registro.participante+"'"+'">Eliminar usuario</button>\ </span>';
                        }
                        content = content + '</p>';
                    }
                })
            }
        });
        content = content + '</div>';
    });
    content = content +  '</a>\ </div>';
    return content;
});
