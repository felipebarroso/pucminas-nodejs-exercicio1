var express = require('express');
var router = express.Router();


let users = { items: [] }


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res) => {
  users.items.push(req.body)
  console.log(req.body)
  res.render('users', {
    fullName: req.body.name
  });
})


module.exports = router;
