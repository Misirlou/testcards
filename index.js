var app = require('express')();
var _PORT_ = 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req,res) {
	if (req.query.callback !== undefined)
	{
		console.log(req.query.callback);
		res.jsonp({"cards":[{"image":"http://i.imgur.com/eM2Uena.jpg","title":"Anamazingtitle","description":"Somethingaboutthiscard","ctas":[{"text":"125for1","value":"c1cta1"},{"text":"200for2","value":"c1cta2"}],"important":"yes"},{"title":"Anamazingtitle2","description":"Somethingaboutthisothercard","ctas":[{"text":"300","value":"c2"}]},{"title":"Didn'tlikeanything?","description":"Searchforsomethingelse","ctas":[{"text":"Search","value":"search"}],"important":"max"}]});
	}
	else if (req.query.with_errors !== undefined)
	{
		console.log("errors "+req.query.with_errors);
		res.json({"cards":[{"ctas":[{"text":"125for1","value":"c1cta1"},{"text":"200for2","value":"c1cta2"}],"important":"yes"},{"ctas":[{"text":"300","value":"c2"}]},{"ctas":[{"text":"Search","value":"search"}],"important":"max"}]});
	}
	else
	{
		console.log("no callback");
		res.json({"cards":[{"image":"http://i.imgur.com/eM2Uena.jpg","title":"Anamazingtitle","description":"Somethingaboutthiscard","ctas":[{"text":"125for1","value":"c1cta1"},{"text":"200for2","value":"c1cta2"}],"important":"yes"},{"title":"Anamazingtitle2","description":"Somethingaboutthisothercard","ctas":[{"text":"300","value":"c2"}]},{"title":"Didn'tlikeanything?","description":"Searchforsomethingelse","ctas":[{"text":"Search","value":"search"}],"important":"max"}]});
	}
});


app.listen(_PORT_, function() {
	console.log(`Server started on port: ${_PORT_}`);
});


