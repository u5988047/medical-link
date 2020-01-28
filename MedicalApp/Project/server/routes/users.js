var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs("mongodb+srv://khachen:Pondsk134@cluster0-x8w0t.mongodb.net/medicallink?retryWrites=true&w=majority");



/* GET users listing. */
router.get("/checkuser", (req,res,next) => {
  db.hospital.find(function(err, user) {
    if(err) {
      res.send(err);
    }
    res.send(user);
  })
});

router.post("/verifyuser", (req,res,next) => {
  var tname = req.body.name;
  var tpass = req.body.pass;
  db.hospital.findOne({'username': req.body.name, 'password': req.body.pass}, (err, user)=> {
    if(!user) {
      res.json({message: 'Login failed'});
    }
    else{
    console.log('success');
    res.status(200).send('Logged in success');
    }
  })
});

module.exports = router;
