export default (state={}, action) => {
    switch (action.type) {
        case 'GET_EMAILS':
            return {...state, emails: [action.payload]};
        
        default:
            return state;
    }
}

