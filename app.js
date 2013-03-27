/**
 * Module dependencies.
 */
var express = require('express')
    , routes = require('./routes/routes')
    , engine = require('ejs-locals')
    , http = require('http')
    , path = require('path');

var app = express();

// need to configure the ejs-locals engine in order to use the layout mechanism
app.engine('ejs', engine);


// add app specific options
app.configure(function () {

    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(express.compress()); // compress content (e.g. css file with gzip)
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(require('less-middleware')({
        dest: path.join(__dirname, 'public', 'app','styles','dist'),
        src: path.join(__dirname, 'public', 'app','styles','less'),
        prefix: '/app/styles/dist',
        force: 'true', // Always re-compile less files on each request.
        compress: true
    }));
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

// configure the routing
app.get('/', routes.index);
app.get('/detail', routes.detail);


//start the server
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
