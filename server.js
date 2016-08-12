var express = require('express'),
  app = express(),
  path = require('path');

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