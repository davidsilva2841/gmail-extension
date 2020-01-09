import { combineReducers } from "redux";






// const gmailReducers = (state={mail:[]}, action) => {
//     console.log(`FILE: index.js gmailReducers() | action.mail: \n`, action.mail);
//     switch (action.type) {
//         case 'GET_EMAILS':
//             return {
//                 ...state,
//                 mail: action.mail
//             };
//         default:
//             return state;
//     }
// };



const gmailReducers = (state={mail:[]}, action) => {
    switch (action.type) {
        case 'GET_EMAILS':
            return {...state, mail: action.payload};
        
        default:
            return state;
    }
};

export default combineReducers({
    gmail: gmailReducers
});

