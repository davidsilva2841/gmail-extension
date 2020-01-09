const router = require('express').Router();

const {
    getGmail,
    getMessage,
    getMessages,
    getInfo,
    getAllInfo,
    getLabels,
} = require('../services/gmailAPI');

let gmail = getGmail();



router.get('/test0', (req, res) => {
    res.send('TEST0 /api/gmail/test');
});

router.get('/test1', (req, res) => {
    getMessages(gmail)
        .then(result => {
        	console.log(`FILE: gmail.js () | result: \n`, result);
        	res.send(result);
        })
});

router.get('/test2', (req, res) => {
    let id = '16f87ae99ae99428';
    getMessage(gmail, id)
        .then(result => {
            console.log(result);
            // res.send(result)
            res.send({
                id: id,
                snippet: result.data.snippet,
                headers: result.data.payload.headers
            })
        })
        .catch(error => {
            console.error(`FILE: gmail.js () | ERROR: \n`, error);
            res.send(error)
        })
});

router.get('/test3', (req, res) => {
    let id = '16f87ae99ae99428';
    getInfo(gmail, id)
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            console.error(`FILE: gmail.js () | ERROR: \n`, error);
            res.send(error)
        })
});

router.get('/test4', (req, res) => {
    getAllInfo(gmail)
        .then(result => {
        	// console.log(`FILE: gmail.js () | result: \n`, result);
        	res.send(result);
        });
    
});




router.get('/emails',(req, res) => {
    getAllInfo(gmail)
        .then(result => {
            res.send(result);
        });
});


module.exports = router;

