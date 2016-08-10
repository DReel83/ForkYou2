var express = require('express');
var app = express();
var path = require('path');
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, function() {
   console.log('Our app is running on http://localhost:' + port);
});