var express = require( 'express' );
var morgan = require( 'morgan' );
var swig = require('swig');
var routes = require('./routes/');
var bodyParser = require('body-parser')


var app = express();

app.use(morgan('dev'));
app.use('/', routes);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'));

app.engine('html',swig.renderFile);
app.set('view engine', 'html');
app.set('views',__dirname + '/views');
swig.setDefaults({ cache: false });

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)

})

