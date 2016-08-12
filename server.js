var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app);


var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
   // ejs render automatically looks in the views folder
   res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port, function() {
   console.log('Our app is running on http://localhost:' + port);
});