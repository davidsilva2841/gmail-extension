import React from 'react';
import { connect } from 'react-redux';

import { getLabels } from "../actions";
import { MDBDataTable  } from 'mdbreact';


const getRows = (labels) => {
    let rows = [];
	for(let label of labels) {
        rows.push({
            id: label.id,
            name: label.name
        })
	}
	return rows;
};

const getColumns = (labels) => {
	return [

        {
            label: 'Name',
            field: 'name'
        },
    ];
};


const LabelsTable = props => {
    let {labels} = props.gmail;
    let rows = getRows(labels);
    let columns = getColumns(labels);
    let data = {
        columns: columns,
        rows: rows
    };
    
    return (
        <div id="labels-table" className="container">
            <button
                className="btn btn-sm btn-primary"
                onClick={ () => props.getLabels() }
            >
                Get labels
            </button>
            <button
                className="btn btn-sm btn-primary"
            >
                Add a label
            </button>
            <MDBDataTable
                btn={true}
                data={data}
                hover={true}
                noBottomColumns={true}
                info={false}
                searching={false}
                striped={true}
                small={true}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        gmail: state.gmail
    }
};
export default connect(mapStateToProps, {getLabels})(LabelsTable);

