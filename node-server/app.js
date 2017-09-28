var express = require('express');
var bodyParser  = require('body-parser');
var app = express();

app.use(express.logger());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

////////////// Expose webpage /////////////////////////
app.use(express.static(__dirname + '/dist'));

app.listen(3000, function () {
      console.log('Angular2 base project listening on port 3000');
});
