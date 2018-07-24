var express = require('express'),
  app = express(),
  port = process.env.PORT || 9000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes Handling


var routes = require('./api/routes/liteCoinRoute'); //importing route
var routes = require('./api/routes/bitshare');
 var routes = require('./api/routes/nemRoute');
routes(app); //register the route



app.use(function(req, res) {
  res.status(404).send({resource: req.originalUrl + ' not found'})
});

app.listen(port);
console.log('RESTful API server started on: ' + port);


