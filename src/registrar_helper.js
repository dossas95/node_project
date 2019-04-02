const hbs = require('hbs');
const fs = require('fs');

hbs.registerHelper('registrado', (nom, ced, cor, tel, cont) => {
    listaUsuarios = require('../public/datos/usuarios.json');
    let usr = {
        id: ced,
        nombre: nom,
        correo: cor,
        telefono: tel,
        contrasena: cont,
        rol: 2
    }
    let validar = listaUsuarios.find(repeat => repeat.id == ced || repeat.correo == cor)
    if (!validar){
        listaUsuarios.push(usr);
        let datos = JSON.stringify(listaUsuarios);
        fs.writeFile('public/datos/usuarios.json', datos, (err) =>{
        if (err) throw(err);
            console.log('registrado');
    });
        return('El usuario ha sido registrado satisfactoriamente');
    }else{
        return('Ya existe un usuario registrado con los valores indicados');
    }
})