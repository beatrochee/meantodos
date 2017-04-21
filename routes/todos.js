let express = require('express');
let router = express.Router();
let mongojs = require('mongojs');
let db = mongojs('mongodb://james:123456@ds111851.mlab.com:11851/jrb514-mean-todos')

router.get('/', (req, res, next) => {
  res.send('TODOS API');
});

module.exports = router;