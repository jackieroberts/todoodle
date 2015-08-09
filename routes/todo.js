/**
 * Created by jackie on 8/9/15.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('todo');
});

module.exports = router;