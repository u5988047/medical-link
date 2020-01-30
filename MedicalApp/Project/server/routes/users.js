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
  console.log(req.body.name, req.body.pass)
  db.hospital.findOne({'username': req.body.name, 'password': req.body.pass}, (err, user)=> {
    if(!user) {
      console.log('fail');
      res.json({ status: 400, msg: "Login fail", success: false})
    }
    else{
    console.log('success');
    res.json({ status: 200, msg: "Login Sucessful", success: true});
    }
  })
});

module.exports = router;
