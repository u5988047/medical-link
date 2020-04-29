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

router.post('/getdatafromAS', function (req, res) {
  axios({
    method: 'get',
    url: 'http://3.15.156.229:8200/rp/request_data/'+req.body.request_id,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    console.log(response.data)
    if(!response){
      console.log("error");
    }
    else{
      console.log(response)
      res.send({
        data: response.data
      })
    }
  }).catch(e => {
    console.log(e)
  })
})

router.post('/registrequest', function(req, res) {
  console.log(req.body.id, req.body.idp)
  console.log("First stamp: " + Math.floor(Date.now()/1000))
 
   if(save_to_db()) {
       var reference_id = `${generateRefId(10)}${generateRefId(10)}`
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
             callback_url: `http://localhost:3000/rp/request/${reference_id}`,
             data_request_list: [{
               service_id: "bank_statement",
               as_id_list: ["as1"],
               min_as: 1,
               request_params: ''
             }],
             request_message: `I would like to register Medical-Link application (Citizen ID : ${req.body.id}, REF: ${reference_id})`,
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
             console.log("Second stamp: " + Math.floor(Date.now()/1000))
             res.send({
               request_id: r.data.request_id,
               initial_salt: r.data.initial_salt,
               reference_id
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

router.post('/request', function(req, res) {
   console.log(req.body.id, req.body.idp)
   console.log("First stamp: " + Math.floor(Date.now()/1000))
  
    if(save_to_db()) {
        var reference_id = `${generateRefId(10)}${generateRefId(10)}`
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
              callback_url: `http://localhost:3000/rp/request/${reference_id}`,
              data_request_list: [],
              request_message: `I would like to share my medical information to RP hospital (REF: ${reference_id})\n Citizen_id: `+req.body.id+'\n Medical_info: Cancer Treatment (Document_id: '+generateRefId(5)+')',
              min_ial: 2.1,
              min_aal: 2.1,
              min_idp: 1,
              request_timeout: 86400,
              bypass_identity_check: false,
            }
          }).then(r => {
            if(r.status == 202){
              console.log('success');
              console.log("Second stamp: " + Math.floor(Date.now()/1000))
              res.send({
                request_id: r.data.request_id,
                initial_salt: r.data.initial_salt,
                reference_id
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

router.post('/deleterequest', function(req, res) {
  console.log(req.body.id, req.body.idp)
  console.log("First stamp: " + Math.floor(Date.now()/1000))
 
   if(save_to_db()) {
       var reference_id = `${generateRefId(10)}${generateRefId(10)}`
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
             callback_url: `http://localhost:3000/rp/request/${reference_id}`,
             data_request_list: [],
             request_message: req.body.request_message+'(Citizen ID : '+req.body.id+' REF : '+reference_id,
             min_ial: 2.1,
             min_aal: 2.1,
             min_idp: 1,
             request_timeout: 86400,
             bypass_identity_check: false,
           }
         }).then(r => {
           if(r.status == 202){
             console.log('success');
             console.log("Second stamp: " + Math.floor(Date.now()/1000))
             res.send({
               request_id: r.data.request_id,
               initial_salt: r.data.initial_salt,
               reference_id
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

router.post('/rp-callback', function(req, res) {
  axios({
    method: 'post',
    url: 'http://'+process.env.SERVER_URL+':8200/rp/request'+req.body.reference_id,
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => {
    console.log(r);
  })
})

router.post('/callback', function(req, res) {
    console.log(req.body);
    console.log('Received request callback from NDID API:', JSON.stringify(callbackData, null, 2));
});

module.exports = router;