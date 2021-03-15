var express = require('express');
var router = express.Router();



router.get('/salam', function(req, res, next){
  res.send("Salam Haletoon khoobe?");
});

router.get('/students', function(req, res, next){
  res.send("Taha, Ariava, Mahdie, Reyhane....");
});

module.exports = router;
