var express		= require('express'),
	app			= express(),
	port		= process.env.PORT || 5000,
	server		= require('http').createServer(app),
	flash		= require('connect-flash'),

	morgan		= require('morgan'),
	bodyParser	= require('body-parser'),
		
	route		= require('./app/routes.js');

// Set-up	============================================

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views');

app.use(flash());

app.use(express.static( __dirname +'/public'));

// Routes	============================================

route(app);

// Run		============================================

app.listen(port,function(){
	console.log("Listening port: " + port);
});