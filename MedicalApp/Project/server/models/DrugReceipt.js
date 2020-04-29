const mongoose = require('mongoose');

const DrugReceiptSchema = new mongoose.Schema({
  ID: {
    type: String,
    default: ''
  },
  User_ID: {
    type: String,
    default: ''
  },
  Doctor_ID: {
    type: String,
    default: ''
  },
  Drug_List: {
    type: String,
    default: ''
  },
  Price: {
    type: String,
    default: ''
  },
  Code: {
    type: String,
    default: ''
  },
  Month: {
    type: String,
    default: ''
  },
  Status: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.model('DrugReceipt', DrugReceiptSchema);