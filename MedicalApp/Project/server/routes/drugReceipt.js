var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
const mongoose = require('mongoose');
const DrugReceipt = require('../models/DrugReceipt');
const User = require('../models/User');
var db = mongojs(process.env.MONGO_URL);

/* GET users listing. */
// router.get("/drugReceipt", (req,res,next) => {
//   db.DrugReceipt.find(function(err, user) {
//     if(err) {
//       res.send(err);
//     }
//     res.send(user);
//   })
// });

router.get("/drugReceipt", (req,res,next) => {
  DrugReceipt.find(function(err, user) {
    if(err) {
      res.send(err);
    }
    res.send(user);
  })
});

router.post("/findinfo", (req,res,next) => {
  DrugReceipt.findOne({"ID": req.body.drugId},function(err, user) {
    if(err) {
      res.send(err);
    }
    console.log(user);
    res.send(user);
  })
})

router.post("/updatestatus", (req,res,next) => {
  DrugReceipt.findOneAndUpdate({"ID": req.body.drugId},{$set: {"Status" : true}},function(err, user) {
    if(err) {
      res.send(err);
    }
    console.log(user);
    res.send(user);
  })
})

router.post("/adddrug", (req,res,next) => {
  const { body } = req;
  let {
    ID,
    User_ID,
    Doctor_ID,
    DrugList,
    Price,
    Code
  } = body;
  let {
    Month,
    Status
  } = body;
  const newDrug = new DrugReceipt();
  newDrug.ID = ID;
  newDrug.User_ID = User_ID;
  newDrug.Doctor_ID = Doctor_ID;
  newDrug.Drug_List = DrugList;
  newDrug.Price = Price;
  newDrug.Code = Code;
  newDrug.Month = Month;
  newDrug.Status = Status;
  newDrug.save((err, drug) => {
    if (err) {
      return  res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      return res.send({
        success: true,
        message: 'done'
      })
  })
})

module.exports = router;
