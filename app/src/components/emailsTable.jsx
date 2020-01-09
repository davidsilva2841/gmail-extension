import React from 'react';
import {connect} from 'react-redux';

import EmailRow from "./emailRow";

const EmailsTable = props => {
    
    return (
        <div>
            {props.gmail.emails.map((email, ix) => <EmailRow email={email} key={ix}/>)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        gmail: state.gmail
    }
};

export default connect(mapStateToProps)(EmailsTable);