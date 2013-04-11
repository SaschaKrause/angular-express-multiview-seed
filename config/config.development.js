
//used for development environment
var env = {};

/*env.mongo = {};
env.mongo.url = 'mongodb://localhost/ecomm_database';
env.socketUrl = 'http://localhost:80';
env.restyleAppId = '01116971348006083575';*/

env.lib = {
    jsFolder: 'dev',
    jsFileSuffix: ''
};

env.styles = {
    compileOnEveryRequest: true
};

module.exports = env;