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
        rol: 1
    }
    listaUsuarios.push(usr);
    let datos = JSON.stringify(listaUsuarios);
    fs.writeFile('public/datos/usuarios.json', datos, (err) =>{
        if (err) throw (err);
        console.log('Registrado');
    });
})