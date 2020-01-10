import React from 'react';
import { connect } from 'react-redux';

import { getFilters } from "../actions";
import { MDBDataTable } from 'mdbreact';


const getRows = (filters, labels) => {
    let rows = [];
    for (let filter of filters) {
        let label = filter.action.addLabelIds || '';
        if (filter.action.addLabelIds) {
            label = labels.filter(label => label.id === filter.action.addLabelIds[0])[0].name;
        }
        rows.push({
            id: filter.id,
            to: filter.criteria.to || '',
            from: filter.criteria.from || '',
            addLabel: label,
        })
    }
    return rows;
};

const getColumns = (labels) => {
    return [
        {
            label: 'To',
            field: 'to'
        },
        {
            label: 'From',
            field: 'from'
        },
        {
            label: 'Add Label',
            field: 'addLabel'
        },
    ];
};


const FiltersTable = props => {
    let { filters, labels } = props.gmail;
    let rows = getRows(filters, labels);
    let columns = getColumns(filters);
    let data = {
        columns: columns,
        rows: rows
    };
    
    return (
        <div id="filters-table" className="container">
            <button
                className="btn btn-sm btn-primary"
                onClick={ () => props.getFilters() }
            >
                Get Filters
            </button>
            <button
                className="btn btn-sm btn-primary"
                onClick={ () => props.getFilters() }
            >
                Add a filter
            </button>
            <MDBDataTable
                btn={ true }
                data={ data }
                hover={ true }
                noBottomColumns={ true }
                info={ false }
                searching={ false }
                striped={ true }
                small={ true }
            />
        </div>
    );
};


const mapStateToProps = state => {
    return {
        gmail: state.gmail
    }
};
export default connect(mapStateToProps, { getFilters })(FiltersTable);
