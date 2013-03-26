
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
      title: '- for you',
      ngPageController: 'MainPageController'
  });
};