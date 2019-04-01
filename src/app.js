var express = require('express');
const path = require('path');
var app = express();
const {sesion} = require('./sesion');
const bodyParser = require('body-parser')

const dirNode_modules = path.join(__dirname , '../node_modules')

app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));

app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));
app.use(bodyParser.urlencoded({extended: false}))

// Helpers
require('./index_helper');
require('./registrar_helper');

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

app.get('/registrar', (req,res) => {
  res.render('registrar', {
    usuario: req.query.nombre,
    cedula: req.query.id,
    correo: req.query.correo,
    telefono: req.query.telefono,
    contrasena: req.query.contrasena
  })
})


app.use((req, res, next)=>{
  if(!sesion){
    res.redirect('/');
  } else{
    req.next();
  }
});


app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
});
