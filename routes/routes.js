
// exporting the routes
module.exports = {
    index: routeIndex,
    detail: routeDetail

};

function routeIndex (req, res) {
    res.render('index', {
        title: 'main page',
        ngPageController: 'MainPageCtrl',
        cssPageIdentifier: 'main-page'
    })
}

function routeDetail (req, res) {
    res.render('detail', {
        title: 'detail page',
        ngPageController: 'DetailPageCtrl',
        cssPageIdentifier: 'detail-page'
    })
}
