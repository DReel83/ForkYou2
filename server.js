var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app);

app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();      
}); 

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});
app.listen(3000);
