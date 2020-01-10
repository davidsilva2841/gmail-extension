import React from 'react';
import { MDBBtn, MDBDataTable  } from 'mdbreact';
import { connect } from 'react-redux';
import { getEmails } from "../actions";

const getRows = sumByDomain => {
    let rows = [];
    for (let key in sumByDomain) {
        rows.push({
            domain: key,
            count: sumByDomain[key],
            AddFilter: <MDBBtn
                rounded
                color="primary"
                size="sm"
                onClick={() => {
                
                }}
            >
                Add Filter
            </MDBBtn>,
        })
    }
    return rows;
};

const getColumns = () => {
	return [
        {
            label: 'Domain',
            field: 'domain',
            sort: 'asc'
        },
        {
            label: 'Count',
            field: 'count',
            sort: 'asc'
        },
        {
            label: '',
            field: 'AddFilter',
            sort: 'asc'
        },
    ];
};

function DomainsTable (props) {
    
    let { sumByDomain } = props.gmail;
    let rows = getRows(sumByDomain);
    let columns = getColumns();
    
    let data = {
        columns: columns,
        rows: rows
    };
    return (
        <div id="domains-table" className="container">
            <span>
                <button
                    className="btn btn-sm btn-primary"
                    onClick={ () => props.getEmails() }
                >
                    Get emails filters
                </button>
            </span>
            <MDBDataTable
                btn={true}
                data={data}
                hover={true}
                info={false}
                striped={true}
                small={true}
                noBottomColumns={true}
            />
        </div>
    );
}


const mapStateToProps = state => {
    return {
        gmail: state.gmail
    }
};


export default connect(mapStateToProps, {getEmails})(DomainsTable)
