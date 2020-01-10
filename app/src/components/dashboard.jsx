import React from 'react';
import { connect } from 'react-redux';

import {
    getEmails
} from "../actions";

import Details from "./details";
import EmailsTable from "./emailsTable";

const Dashboard = props => {
    return (
        <div id="dashboard">
            <span>
            
                <button
                    className="btn btn-sm btn-primary"
                    onClick={ () => props.getEmails() }
                >
                    Get emails
                </button>
            </span>
            <Details/>
            <EmailsTable/>
            
        </div>
    );
};

const mapStateToProps = state => {
    return {
        gmail: state.gmail
    }
};

export default connect(
    mapStateToProps,
    {
        getEmails
    })
(Dashboard);

