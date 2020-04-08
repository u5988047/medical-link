var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs(process.env.MONGO_URL);

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
