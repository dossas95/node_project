


const listarMisCursos = () => {
  try {
    let misregistros;
    let miscursos=[];
    misregistros = require('../public/datos/registros.json');
    sesion = require('../public/datos/sesion.json');
    cursos= require('../public/datos/cursos.json');
    id=sesion.id;
    misregistros = misregistros.filter(registro => registro.participante === id && registro.interes === 0 );
    
    misregistros.forEach(registro => {
        miscursos.push(cursos.find(curso => curso.id===registro.curso));
    });

    return miscursos;

  } catch (error) {
    return miscursos = [];
  }
};


const salirDeCurso = (curso) =>{
    let otrosRegistros=[];
    sesion = require('../public/datos/sesion.json');
    registros = require('../public/datos/registros.json');
    id=sesion.id;

    registros.forEach(registro=>{
        if (registro.curso !== curso || registro.participante !==id) {
            otrosRegistros.push(registro);
        }
    })

    let datos=JSON.stringify(otrosRegistros);
    const fs  = require('fs');
    fs.writeFile('./public/datos/registros.json', datos, (err) => {
        if (err) console.log('error');
    });
}

module.exports = {
  listarMisCursos,
  salirDeCurso
}
