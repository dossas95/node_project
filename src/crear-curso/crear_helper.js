const hbs = require('hbs');
const fs = require('fs');

hbs.registerHelper('creado', (nom, identificador, desc, val, int, mod) => {
    listaCursos = require('../public/datos/cursos.json');
    let cur;
    if (int == ""){
        cur = {
            id: identificador,
            estado: 'disponible',
            nombre: nom,
            valor: val,
            descripcion: desc,
            modalidad: mod
        }
    }else{
        cur = {
            id: identificador,
            estado: 'disponible',
            nombre: nom,
            valor: val,
            descripcion: desc,
            modalidad: mod,
            intensidad: int
        }
    }
    let validar = listaCursos.find(repeat => repeat.id == identificador)
    if (!validar){
        listaCursos.push(cur);
        let datos = JSON.stringify(listaCursos);
        fs.writeFile('public/datos/cursos.json', datos, (err) =>{
        if (err) throw(err);
            console.log('curso creado');
    });
        return('El curso ha sido creado satisfactoriamente');
    }else{
        return('Ya existe un curso registrado con este ID');
    }
})