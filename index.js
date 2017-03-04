const PORT = 80;
var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`)
})
