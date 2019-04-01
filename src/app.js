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
require('./adminCursos/adminCursos_helper');

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

app.get('/adminCursos', (req, res) => {
  res.render('adminCursos');
});

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
