import gmail from '../apis/gmail';
const emailsDummyData = require('../data/emails');
const _ = require('underscore');
// --------------------------------------------------------------------------------------------------



const getSender = (headers) => {
    let receivedFrom =  headers.filter(header => header.name === 'From');
    if (receivedFrom.length) {
        receivedFrom = receivedFrom[0].value;
    } else {
        return 'MISSING_FROM';
    }
    
    if (receivedFrom.includes(' ')) {
        receivedFrom = receivedFrom
            .split('<')[1]
            .replace('>', '');
    }
    return receivedFrom;
};

const getSentTo = (headers) => {
    let sentTo =  headers.filter(header => header.name === 'Delivered-To');
    sentTo.length === 0 ?
        sentTo = sentTo =  headers.filter(header => header.name === 'From')
        : null ;
    
    if (sentTo.includes('<')) {
        sentTo = sentTo
            .split('<')[1]
            .replace('>', '');
    }
    return sentTo[0].value;
};

const cleanEmails = (emails) => {
    for(let email of emails) {
        email.sender = getSender(email.headers);
        email.sentTo = getSentTo(email.headers);
        email.sendersDomain = '@' + email.sender.split('@')[1];
    }
};


// export const getEmails = () =>  async (dispatch, getState) => {
//     // let mail = await gmail.get('/emails');
//     let mail = emailsDummyData;
//
//     console.log(mail);
//     // cleanEmails(mail);
//     // let sumByDomain = _.countBy(mail, 'sendersDomain');
//
//     dispatch ({
//         type: 'GET_EMAILS',
//         payload: mail
//     });
// };

export const getEmails = () =>  async (dispatch, getState) => {
    // let emails = await gmail.get('/emails');
    let emails = emailsDummyData;
    
    cleanEmails(emails);
    
    dispatch ({
        type: 'GET_EMAILS',
        payload: emails
    });
};






