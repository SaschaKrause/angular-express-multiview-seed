//used for development environment
var env = {};

/*env.mongo = {};
 env.mongo.url = 'mongodb://owner:pw@ds035997.mongolab.com:35997/my_db';
 env.socketUrl = 'http://crowdlog.herokuapp.com';
 env.restyleAppId = '08105991347402428965';*/

env.lib = {
    jsFolder: 'production',
    jsFileSuffix: 'min.'
};

env.styles = {
  compileOnEveryRequest: false
};
module.exports = env;