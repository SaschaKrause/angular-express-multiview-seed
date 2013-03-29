/**
 * Configure all pages routes that should be accessible
 * @param webApp the main app that should be configured
 */
module.exports.configure = function (webApp) {
    webApp.get('/', routeIndex);
    webApp.get('/detail', routeDetail);
};

// delegates

function routeIndex(req, res) {
    res.render('main', {
        title: 'main page',
        ngPageController: 'MainPageCtrl',
        cssPageIdentifier: 'main-page'
    })
}

function routeDetail(req, res) {
    res.render('detail', {
        title: 'detail page',
        ngPageController: 'DetailPageCtrl',
        cssPageIdentifier: 'detail-page'
    })
}
