var express = require('express');
var router = express.Router();
var axios = require('axios');

router.post('/showidp', function(req, res) {
    axios({
      url: 'http://'+process.env.SERVER_URL+':8200/utility/idp',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(function(r) {
        res.send({
          request: {},
          idp_list: r.data
        })
      }).catch(e => {
        console.log(e);
      });
});



router.post('/request', function(req, res) {
   console.log(req.body.id, req.body.idp)
  
    if(save_to_db()) {
        var reference_id = `ref_${generateRefId(10)}${generateRefId(10)}`
        axios({
            method: 'post',
            url: 'http://'+process.env.SERVER_URL+':8200/rp/requests/citizen_id/'+req.body.id,
            headers: {
              'Content-Type': 'application/json',
            },
            data: {
              mode: 2,
              node_id: 'rp1',
              reference_id,
              idp_id_list: [req.body.idp],
              callback_url: `http://localhost:3000/api/callback`,
              data_request_list: [],
              request_message: `I would like to share my medical information to RP hospital (REF: ${reference_id})?`,
              min_ial: 2.1,
              min_aal: 2.1,
              min_idp: 1,
              request_timeout: 86400,
              bypass_identity_check: false,
            }
          }).then(r => {
            if(r.status == 202){
              console.log('success');
              console.log(r.data);
              res.send({
                request_id: r.data.request_id,
                initial_salt: r.data.initial_salt,
                reference_id,
              })
            }
            else{
              console.log(r)
            }
        
          }).catch(e => {
            console.log(e)
          })
    } else {
      res.status(500).send({
        message: 'Cannot save data to database.'
    });
    }
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


function save_to_db() {
  return true;
}

router.post('/callback', function(req, res) {
    console.log(req.body);
    console.log('Received request callback from NDID API:', JSON.stringify(callbackData, null, 2));
});

module.exports = router;