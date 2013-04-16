/**
 * Configure all pages routes that should be accessible
 * @param webApp the main app that should be configured
 */
var config;
module.exports.configure = function (webApp, configT) {
    config = configT;
    webApp.get('/', routeIndex);
    webApp.get('/detail', routeDetail);
};

// delegates

function routeIndex(req, res) {
    res.render('main', {
        title: 'Countrees - Lets start counting',
        ngPageController: 'MainPageCtrl',
        cssPageIdentifier: 'main-page',
        jsFolder: config.env.lib.jsFolder,
        jsFileSuffix: config.env.lib.jsFileSuffix
    })
}

function routeDetail(req, res) {
    res.render('detail', {
        title: 'detail page',
        ngPageController: 'DetailPageCtrl',
        cssPageIdentifier: 'detail-page'
    })
}
