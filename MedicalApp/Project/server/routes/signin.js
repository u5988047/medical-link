var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = mongoose
          .connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }).then(() => console.log('DB Connected!'))
            .catch(err => {
              console.log(err.message);
            });


module.exports = router;
