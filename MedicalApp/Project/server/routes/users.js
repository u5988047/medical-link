var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs("mongodb+srv://khachen:Pondsk134@cluster0-x8w0t.mongodb.net/medicallink?retryWrites=true&w=majority");

/* GET users listing. */
router.get("/checkuser", (req,res,next) => {
  db.hospital.find(function(err, hospital) {
    if(err) {
      res.send(err);
    }
    res.send(hospital);
  })
});

module.exports = router;
