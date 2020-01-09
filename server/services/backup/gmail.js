
const {google} = require('googleapis');
const fs = require('fs');
let auth;

// --------------------------------------------------------------------------------------------------

const init = () => {
    console.log(`FILE: gmail.js initGmail()`);
    
    return readJSON('credentials.json')
        .then(credentials => {
            const {client_secret, client_id, redirect_uris} = credentials.installed;
            auth = new google.auth.OAuth2(
                client_id,
                client_secret,
                redirect_uris[0]
            );
            return readJSON('token.json');
        })
        .then(token => {
            auth.setCredentials(token);
            // const gmail = google.gmail({version: 'v1', auth: auth});
            // Set gmail object here
            // return auth;
            return google.gmail({version: 'v1', auth: auth});
        })
        .catch(error => {
        	console.error(`FILE: gmail.js init() | ERROR: \n`, error);
        	return error;
        })
    
};


const readJSON = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, function(err, data){
            if (err)
                reject(err);
            else
                resolve(JSON.parse(data));
        });
    })
};

const getLabels = (gmail) => {
    return gmail.users.labels.list({ userId: 'me'})
        .then(result => {
            console.log(result);
            return result.data.labels;
        })
        .then(result => {
        	console.log(`FILE: gmail.js getLabels() | result: \n`, result);
        	return result;
        })
};

const getMessages = (gmail) => {
    return gmail.users.messages.list({ userId: 'me'})
        .then(result => {
            console.log(result);
            return result;
        })
        .catch(error => {
        	console.error(`FILE: gmail.js getMessages() | ERROR: \n`, error);
        	return error;
        })
};



// const test = async () => {
// 	let r = await initGmail();
//     console.log(r);
// };
//
// test();
// initGmail()
//     .then(result => {
//         console.log(`FILE: gmail.js () | result: \n`, result);
//     })
//     .catch(error => {
//         console.error(`FILE: gmail.js () | ERROR: \n`, error);
//     });

const test = () => {
    return new Promise(resolve => resolve(['mail_item_2_ASYNC_TEST']));
};

module.exports = {
    init,
    test
    
};




