import { combineReducers } from "redux";


const gmailReducers = (state={emails:[], sumByDomain: '', labels: [], filters: []}, action) => {
    switch (action.type) {
        case 'GET_EMAILS':
            return {
                ...state,
                emails: action.emails,
                sumByDomain: action.sumByDomain
            };
        case 'GET_LABELS':
            return {
                ...state,
                labels: action.labels
            };
            
        case 'GET_FILTERS':
            return {
                ...state,
                filters: action.filters
            };
            
        default:
            return state;
    }
};

export default combineReducers({
    gmail: gmailReducers
});

