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

export const getEmails = () =>  async (dispatch, getState) => {
    // let emails = await gmail.get('/emails');
    let emails = emailsDummyData;

    cleanEmails(emails);
    let sumByDomain = _.extend({}, _.countBy(emails, 'sendersDomain'));
    
    dispatch ({
        type: 'GET_EMAILS',
        emails,
        sumByDomain
    });
};



export const getLabels = () => async (dispatch, getState) => {
    let labels = await gmail.get('/labels');
    
    dispatch ({
        type: 'GET_LABELS',
        labels: labels.data
    });
    
};


export const getFilters = () => async (dispatch, getState) => {
    let filters = await gmail.get('/filters');
    
    dispatch ({
        type: 'GET_FILTERS',
        filters: filters.data
    });
    
};







