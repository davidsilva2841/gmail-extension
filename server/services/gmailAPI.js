const {google} = require('googleapis');
let auth;

// --------------------------------------------------------------------------------------------------
const {credentials, token} = require('./auth').davidsilva2841;
// const {credentials, token} = require('./auth').dsilva525;

const getGmail = () => {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    auth = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
    );
    auth.setCredentials(token);
    return google.gmail({version: 'v1', auth: auth});
};

const getLabels = (gmail) => {
    return gmail.users.labels.list({ userId: 'me'})
        .then(result => {
            return result.data.labels;
        });
};

const getMessage = (gmail, id) => {
    return gmail.users.messages.get({
        id: id,
        userId: 'me',
        format: 'metadata',
        metadataHeaders: ['From', 'Delivered-To']
        
    })
};

const getMessages = (gmail, nextPageToken='') => {
    return gmail.users.messages.list({
        userId: 'me',
        maxResults: 500,
        nextPageToken: nextPageToken
    })
    .then(result => {
        return result;
    });
};

const getInfo = (gmail, id) => {
	return getMessage(gmail, id)
        .then(result => {
            return {
                id: id,
                snippet: result.data.snippet || '',
                headers: result.data.payload.headers || ''
            };
        })
};

const getAllInfo = (gmail) => {
	return getMessages(gmail)
        .then(result => {
            console.log(result);
            let messages = result.data.messages;
            
            let promises = [];
            for(let message of messages) {
                promises.push(getInfo(gmail, message.id));
            }
            return Promise.all(promises);
        });
};



module.exports = {
    getGmail,
    getMessage,
    getMessages,
    getInfo,
    getAllInfo,
    getLabels
};




