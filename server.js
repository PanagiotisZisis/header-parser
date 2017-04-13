var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

app.get('/', function(req, res) {
    
   var os = req.useragent.os;
   var ipAddress = req.ip;
   var language = req.acceptsLanguages();
   
   res.json({
       'IP': ipAddress,
       'language': language[0],
       'OS': os
   });
   
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 8080!')
});