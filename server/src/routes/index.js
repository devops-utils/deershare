import { hello } from '../controllers/hello';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '小鹿快传' });
});

router.post('/api/hello', hello);

module.exports = router;
