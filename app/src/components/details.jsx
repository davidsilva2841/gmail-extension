import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBDataTable  } from 'mdbreact';
import { connect } from 'react-redux';


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


function Details (props) {
    
    let { sumByDomain } = props.gmail;
    let rows = getRows(sumByDomain);
    let columns = getColumns();
    
    let data = {
        columns: columns,
        rows: rows
    };
    return (
        <div id="details">
            <MDBDataTable
                btn={true}
                data={data}
                hover={true}
                striped={true}
            >
            
            </MDBDataTable>

        </div>
    );
}


const mapStateToProps = state => {
    return {
        gmail: state.gmail
    }
};


export default connect(mapStateToProps)(Details)
