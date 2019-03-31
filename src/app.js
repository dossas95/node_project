var express = require('express');
const path = require('path');
var app = express();

// Helpers
require('./index_helper');

const directorioPublico = path.join(__dirname, '../public');
app.use(express.static(directorioPublico));

app.set("view engine", "hbs");
 
app.get('/', (req,res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
});
