/* GET home page. */
// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/* GET dashboard page. */
exports.dashboard = function(req, res){
  res.render('dashboard', { title: 'Dashboard', heading: 'Model' });
};

