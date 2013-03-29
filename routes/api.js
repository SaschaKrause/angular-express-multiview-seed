/**
 * Configure all api routes that should be accessible
 * @param webApp the main app that should be configured
 */
module.exports.configure = function (webApp) {

    webApp.get('/api/date/:id', getDateById);
    webApp.get('/api/user/:id', getUserById);
};


// delegates

var getDateById = function (req, res) {
    return res.send({name: 'dateByid', id: req.params.id});
};


var getUserById = function (req, res) {
    return res.send({name: 'userByid', id: req.params.id});
};




