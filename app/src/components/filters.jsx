import React from 'react';
import { connect } from 'react-redux';


import DomainsTable from "./domainsTable";
import LabelsTable from "./labelsTable";
import FiltersTable from "./filtersTable";





const Filters = props => {

    
    return (
        <div id="filters">

            <DomainsTable />
            
            <LabelsTable />
            <FiltersTable/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        gmail: state.gmail
    }
};

export default Filters;
