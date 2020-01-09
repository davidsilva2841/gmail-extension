import { combineReducers } from "redux";


const gmailReducers = (state={emails:[], sumByDomain: ''}, action) => {
    switch (action.type) {
        case 'GET_EMAILS':
            return {
                ...state,
                emails: action.emails,
                sumByDomain: action.sumByDomain
            };
        
        default:
            return state;
    }
};

export default combineReducers({
    gmail: gmailReducers
});

