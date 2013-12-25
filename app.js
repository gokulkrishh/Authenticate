
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , fs = require('fs'); // added fs module to variable fs

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
// adding routes to http://localhost:3000/form
app.get('/form',function(req,res)
{
	//reading file ./form.html in current dir
	fs.readFile('./form.html',function(error,content)
	{
		if(error)
		{
			res.writeHead(500);
		}
		else
		{
			res.writeHead(200,{'content-type':'text/html'});
			res.end(content,'utf-8');
		}
	});
});
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
