const _ = require('underscore');
let arr = [
    {
        sender: "emily.hilliard@galvanize.com",
        sentTo: "davidsilva2841+hackreactor@gmail.com",
        sendersDomain: "@galvanize.com"
    },
    {
        sender: "emily.hilliard@galvanize.com",
        sentTo: "davidsilva2841+hackreactor@gmail.com",
        sendersDomain: "@galvanize.com"
    },
];

let uniq = _.countBy(arr, 'sendersDomain');

console.log(uniq);



