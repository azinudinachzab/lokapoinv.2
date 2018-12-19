var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
		if(req.session.user==undefined){
			res.render('about');
		}
		else{
			var user = req.session.user;
			res.render('about2',{user});
		}
	});

module.exports = router;
