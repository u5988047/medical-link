var express = require('express');
var router = express.Router();
const User = require('../models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const speakeasy = require('speakeasy');
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

router.post("/totp-secret", (req, res, next) => {
  var secret = speakeasy.generateSecret({ length: 20 });
  res.send({"secret": secret.base32 });
});

router.post("/totp-generate", (req, res, next) => {
  res.send({
      "token": speakeasy.totp({
          secret: req.body.secret,
          encoding: "base32"
      }),
      "remaining": (5000 - Math.floor((new Date().getTime() / 1000.0 % 30)))
  });
});

router.post("/totp-validate", (req, res, next) => {
  res.send({
      "valid": speakeasy.totp.verify({
          secret: req.body.secret,
          encoding: "base32",
          token: req.body.token,
          window: 0
      })
  })
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

module.exports = router;
