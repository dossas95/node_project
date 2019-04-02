const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const {sesion} = require('./sesion');

const dirNode_modules = path.join(__dirname , '../node_modules')

app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.urlencoded({extended: false}));

// Helpers
require('./index_helper');
require('./registrar_helper');
require('./login/validar-datos_helper');

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
})


app.use((req, res, next)=>{
  if(!sesion){
    res.redirect('/');
  } else{
    req.next();
  }
});

app.get('/validar-datos', (req,res) => {
  res.render('validar-datos', {
    correo: req.query.correo,
    pass: req.query.pass
  });
});


app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
});
