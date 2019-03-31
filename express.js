var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('David es Gay y a Edwin le agrada mucho la noticia.')
})
 
app.listen(3000)
