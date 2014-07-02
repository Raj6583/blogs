/* GET home page. */
// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/* GET dashboard page. */
<<<<<<< HEAD
exports.dashboard = function(x) {
	function(req, res){
  		res.render('dashboard', { title: 'Dashboard' });
	}
=======
exports.dashboard = function(req, res){
  res.render('dashboard', { title: 'Dashboard', heading: 'Model', nav: "Home", nav_two: "About us", nav_three: "Contact us" });
>>>>>>> 2901a5f4fb5cea48399834d7760f6875c5889307
};

