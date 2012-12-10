
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
	metatitle: 'MetaTitle is set in routes/index.js',
	message: 'Welcome message set in routes/index.js'
  });
};