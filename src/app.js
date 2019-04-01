var express = require('express');
const path = require('path');
var app = express();
const {sesion} = require('./sesion');

const dirNode_modules = path.join(__dirname , '../node_modules')

app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));

app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));

// Helpers
require('./index_helper');
require('./miscursos_helper');

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


app.use((req, res, next)=>{
  if(!sesion){
    res.redirect('/');
  } else{
    req.next();
  }
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



app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
});
