var express = require('express');
var router = express.Router();
const User = require('../models/User');
const mongoose = require('mongoose');
const axios = require('axios');
const bcrypt = require('bcrypt');
const speakeasy = require('speakeasy');
const nodemailer = require('nodemailer');
const UserSession = require('../models/UserSession');
const db = mongoose
          .connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }).then(() => console.log('DB Connected!'))
            .catch(err => {
              console.log(err.message);
              console.log(process.env.MONGO_URL);
            });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/account/signup', (req, res, next) => {
  const { body } = req;
  let {
    lastName,
    password,
    citizenID
  } = body;
  let {
    firstName,
    email
  } = body;

  if (!firstName) {
    return res.send({
      success: false,
      message: 'Error: First name cannot be blank.'
    });
  }
  if (!lastName) {
    return res.send({
      success: false,
      message: 'Error: Last name cannot be blank.'
    });
  }
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!citizenID) {
    return res.send({
      success: false,
      message: 'Error: CitizenID cannot be blank.'
    });
  }
  if (citizenID.length != 13) {
    return res.send({
      success: false,
      message: 'Error: CitizenID should have 13 digits.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }
  
  email = email.toLowerCase();

  User.find({
    email: email
  }, (err, previousUsers) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Sever error'
      });
    } 
    else if (previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exist'
      });
    }

    const newUser = new User();

    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    // newUser.password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    newUser.password = newUser.generateHash(password);
    newUser.citizenID = newUser.generateHash(citizenID);
    newUser.save((err, user) => {
      if (err) {
      return  res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      return res.send({
        success: true,
        message: 'Signed up'
      })
    });
  });
});

router.post('/api/account/signin', (req, res, next) => {
  const { body } = req;
  const {
    password
  } = body
  let {
    email
  } = body;

  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  email = email.toLowerCase();

  User.find({
    email: email
  }, (err, users) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: server error'
      });
    }
    if (users.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    }

    const user = users[0];
    if (!user.validPassword(password)) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    }

    const userSession = new UserSession();
    userSession.userId = user._id;
    userSession.save((err,doc) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }

      return res.send({
        firstName: user.firstName,
        success: true,
        message: 'Valid signin',
        token: doc._id
      })
    })
  });
});

router.post("/api/account/verify", (req, res, next) => {

  const { query } = req;
  const { token } = query; 

  UserSession.find(
    {
      _id: token,
      isDeleted: false
    },
    (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error"
        });
      }

      if (sessions.length != 1) {
        return res.send({
          success: false,
          message: "Error: Invalid"
        });
      } else {
        return res.send({
          success: true,
          message: "Good"
        });
      }
    }
  );
});

router.post('/api/account/logout', (req, res, next) => {
  const { query } = req;
  const { token } = query;

  UserSession.findOneAndUpdate({
    _id: token,
    isDeleted: false
  }, {
   $set: {isDeleted:true}
}, null, (err, sessions) => {
    if (err) {
      console.log(err);
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }

  return res.send({
    success: true,
    message: 'Logout'
  })
  });
});

router.post("/validatecid", (req,res,next) => {
  const { body } = req;
  let {
    cid,
    email
  } = body;
  if(!cid) {
    return res.send({
      success: false,
      message: 'Citizen ID cannot be blank.'
    });
  }
  if(!email) {
    return res.send({
      success: false,
      message: 'Email cannot be blank.'
    });
  }

  email = email.toLowerCase();

  User.find({
    email: email
  },(err, users)=> {
    if(err) {
      return res.send({
        success: false,
        message: 'Error: server error'
      });
    }
    if(users.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    }

    const user = users[0];
    if(user.validcitizenID(cid)) {
      return res.send({
        success: true,
        message: 'Validated'
      });
    }
    else
    {
      return res.send({
        success: false,
        message: 'invalid'
      });
    }
  })
})

router.post('/drugcode', (req, res, next) => {
  const { body } = req;
  let {
    email,
  } = body;
  var secret = speakeasy.generateSecret({ length: 20});
  var token;
  var remaining;
  var ref = generateRefId(5);

  token = speakeasy.totp({
            secret: secret.base32,
            encoding: "base32"
          });
          console.log(secret)
  console.log(token);
  remaining = (5000 - Math.floor((new Date().getTime() / 1000.0 % 30)));
  console.log(remaining);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ndidseniorproject@gmail.com',
      pass: 'ndid5988119'
    }
  });

  let mailOptions = {
    from: 'ndidseniorproject@gmail.com',
    to: email,
    subject: 'Drug Receipt Code Confirmation',
    text: 'Drug Receipt code for Medical Link Application: '+ token + ' (REF: ' + ref + ')'
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
      console.log('Error occurs');
      return res.send({
        success: "false"
      });
    } else {
      console.log('Email Sent!');
      return res.send({
        success: "true"
      });
    }
  });

})

router.post('/mailsender', (req, res, next) => {
  const { body } = req;
  let {
    email,
  } = body;

  var secret = speakeasy.generateSecret({ length: 20});
  var token;
  var remaining;
  var ref = generateRefId(5);

  token = speakeasy.totp({
            secret: secret.base32,
            encoding: "base32"
          });
          console.log(secret)
  console.log(token);
  remaining = (5000 - Math.floor((new Date().getTime() / 1000.0 % 30)));

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ndidseniorproject@gmail.com',
      pass: 'ndid5988119'
    }
  });

  let mailOptions = {
    from: 'ndidseniorproject@gmail.com',
    to: email,
    subject: 'Medical-Link OTP Confirmation',
    text: 'OTP for Medical Link Application: '+ token + ' (REF: ' + ref + ')'
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
      console.log('Error occurs');
      return res.send({
        success: false
      });
    } else {
      console.log('Email Sent!');
      return res.send({
        success: true,
        secret: secret.base32
      });
    }
  });

})

router.post("/otp-validate", (req, res, next) => {
  res.send({
      "valid": speakeasy.totp.verify({
          secret: req.body.secret,
          encoding: "base32",
          token: req.body.token,
          window: 1
      })
  })
});

function generateRefId(n) {
  var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   

  if ( n > max ) {
          return generate(max) + generate(n - max);
  }

  max        = Math.pow(10, n + add);
  var min    = max/10; // Math.pow(10, n) basically
  var number = Math.floor( Math.random() * (max - min + 1) ) + min;

  return ("" + number).substring(add); 
}

module.exports = router;
