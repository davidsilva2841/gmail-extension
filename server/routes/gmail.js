const router = require('express').Router();

const {
    getGmail,
    getMessage,
    getMessages,
    getInfo,
    getAllInfo,
    getLabels,
    listFilters,
    listLabels
} = require('../services/gmailAPI');

let gmail = getGmail();



router.get('/test0', (req, res) => {
    res.send('TEST0 /api/gmail/test');
});

router.get('/test1', (req, res) => {
    listFilters(gmail)
        .then(result => {
        	console.log(`FILE: gmail.js () | result: \n`, result);
        	res.send(result);
        })
});

router.get('/test2', (req, res) => {
    listFilters(gmail)
        .then(result => {
        	console.log(`FILE: gmail.js () | result: \n`, result);
        	res.send(result);
        })
});



router.get('/labels', (req, res) => {
    listLabels(gmail)
        .then(result => {
        	console.log(`FILE: gmail.js () | result: \n`, result);
        	res.send(result.data.labels);
        })
});

router.get('/filters', (req, res) => {
    listFilters(gmail)
        .then(result => {
        	console.log(`FILE: gmail.js () | result: \n`, result);
        	res.send(result.data.filter);
        })
});



router.get('/emails',(req, res) => {
    getAllInfo(gmail)
        .then(result => {
            res.send(result);
        });
});


module.exports = router;

