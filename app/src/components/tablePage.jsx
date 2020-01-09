import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

const TablePage = (props) => {
    const columns= [
        {
            label: '#',
            field: 'id',
            sort: 'asc'
        },
        {
            label: 'First',
            field: 'first',
            sort: 'asc'
        },
        {
            label: 'Last',
            field: 'last',
            sort: 'asc'
        },
        {
            label: 'Handle',
            field: 'handle',
            sort: 'asc'
        }
    ];
    
    const test = (e) => {
        console.log(`test() | e:`, e);
        console.log(`test() | e.target:`, e.target);
        console.log(`test() | e.target:`, e.target.parent);
        
    };
    const rows_regular_btn = [
        {
            'id': 1,
            'first': <MDBBtn color="purple" size="sm">Button</MDBBtn>,
            'last': 'Otto',
            'handle': '@mdo'
        },
        {
            'id': 2,
            'first': 'Jacob',
            'last': <MDBBtn
                onClick={e => test(e)}
                color="purple"
                size="sm">Button</MDBBtn>,
            'handle': '@fat'
        },
        {
            'id': 3,
            'first': 'Larry',
            'last': 'the Bird',
            'handle': <MDBBtn color="purple" size="sm">Button</MDBBtn>
        }
    ];
    
    return(
        <MDBTable btn>
            <MDBTableHead columns={columns} />
            <MDBTableBody rows={rows_regular_btn} />
        </MDBTable>
    );
};

export default TablePage;
