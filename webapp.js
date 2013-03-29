/**
 * Module dependencies.
 */
var express = require('express')
    , pageRoutes = require('./routes/pages')
    , apiRoutes = require('./routes/api')
    , engine = require('ejs-locals')
    , http = require('http')
    , path = require('path');

var webApp = express();

// need to configure the ejs-locals engine in order to use the layout mechanism
webApp.engine('ejs', engine);


// add webApp specific options
webApp.configure(function () {

    webApp.set('port', process.env.PORT || 3000);
    webApp.set('views', path.join(__dirname, 'views'));
    webApp.set('view engine', 'ejs');
    webApp.use(express.compress()); // compress content (e.g. css file with gzip)
    webApp.use(express.favicon());
    webApp.use(express.logger('dev'));
    webApp.use(express.bodyParser());
    webApp.use(express.methodOverride());
    webApp.use(webApp.router);
    webApp.use(require('less-middleware')({
        dest: path.join(__dirname, 'public', 'webApp','styles','dist'),
        src: path.join(__dirname, 'public', 'webApp','styles','less'),
        prefix: '/webApp/styles/dist',
        force: 'true', // Always re-compile less files on each request.
        compress: true
    }));
    webApp.use(express.static(path.join(__dirname, 'public')));
});

webApp.configure('development', function () {
    webApp.use(express.errorHandler());
});

// configure the routing
pageRoutes.configure(webApp);
apiRoutes.configure(webApp);

//start the server
http.createServer(webApp).listen(webApp.get('port'), function () {
    console.log("Express server listening on port " + webApp.get('port'));
});
