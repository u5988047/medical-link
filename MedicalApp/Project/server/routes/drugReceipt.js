var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs("mongodb+srv://khachen:Pondsk134@cluster0-x8w0t.mongodb.net/medicallink?retryWrites=true&w=majority");



/* GET users listing. */
router.get("/drugReceipt", (req,res,next) => {
  db.DrugReceipt.find(function(err, user) {
    if(err) {
      res.send(err);
    }
    res.send(user);
  })
});

module.exports = router;
