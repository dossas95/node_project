const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const {sesion, obtenerRol, eliminarSesion} = require('./sesion');

const dirNode_modules = path.join(__dirname , '../node_modules');

app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.urlencoded({extended: false}));

// Helpers
require('./index_helper');
require('./adminCursos/adminCursos_helper');
require('./miscursos_helper');
require('./registro/registrar_helper');
require('./login/validar-datos_helper');
require('./crear-curso/crear_helper');

const directorioPublico = path.join(__dirname, '../public');
app.use(express.static(directorioPublico));

app.set("view engine", "hbs");
 
// Routes 
app.get('/', (req,res) => {
  res.render('index');
});

app.get('/login', (req,res) => {
  res.render('login');
});

app.get('/registro', (req,res) => {
  res.render('registro');
});

app.post('/registrar', (req,res) => {
  res.render('registrar', {
    usuario: req.body.nombre,
    cedula: req.body.id,
    correo: req.body.correo,
    telefono: req.body.telefono,
    contrasena: req.body.contrasena
  })
});

app.get('/validar-datos', (req,res) => {
  res.render('validar-datos', {
    correo: req.query.correo,
    pass: req.query.pass
  });
});

app.get('/logout', (req, res) => {
  if (eliminarSesion()) {
    res.redirect('login');
  } else {
    res.redirect('validar-datos');
  }
});

app.use((req, res, next)=>{
  if(!sesion){
    res.redirect('/');
  } else{
    req.next();
  }
});

app.get('/adminCursos', (req, res) => {
  res.render('adminCursos');
});

app.get('/cerrar/:curso', (req,res) => {
  curso = parseInt(req.param("curso"));
  const adminCursos = require('./adminCursos/adminCursos');
  adminCursos.cerrarCurso(curso);
  res.redirect('../adminCursos');
});

app.get('/eliminar/:usuario', (req,res) => {
  usuario = parseInt(req.param("usuario"));
  const adminCursos = require('./adminCursos/adminCursos');
  adminCursos.eliminarUsuario(usuario);
  res.redirect('../adminCursos');
});

app.get('/miscursos', (req,res) => {
  res.render('miscursos');
});

app.get('/salir/:curso', (req,res) => {
  curso=parseInt(req.param("curso"));
  const miscursos = require('./miscursos.js');
  miscursos.salirDeCurso(curso);
  res.redirect('../miscursos');
});

app.get('/crear-curso', (req, res) => {
  if (obtenerRol()==0){
    res.render('crear-curso');
  } else{
    res.render('validar-datos');
  }
});

app.post('/crear', (req,res) => {
  res.render('crear', {
    nombre: req.body.nombre,
    identificador: req.body.identificador,
    descripcion: req.body.descripcion,
    valor: req.body.valor,
    intensidad: req.body.intensidad,
    modalidad: req.body.modalidad,
  })
});

app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
});
