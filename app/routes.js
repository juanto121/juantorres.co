module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index.ejs');
	});

	app.get('/projects', function(req, res){
		res.render('projects.ejs');
	});

	app.get('/projects/beat', function(req,res){
		res.render('./projects/heartmonitor.ejs');
	});

	app.get('/projects/maggie', function(req, res){
		res.render('./projects/maggie/maggiesimpson.ejs');
	});

};