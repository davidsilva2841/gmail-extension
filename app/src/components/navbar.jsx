import React from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink
} from "mdbreact";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Filters from "./filters";

const Navbar = props => {
    return (
        <Router>
            <MDBNavbar color='primary-color-dark' dark expand="md" id="navbar">
                <MDBNavbarBrand>
                    <div className="logo">Gmail Organizer</div>
                </MDBNavbarBrand>
            
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <Link exact to="/dist/">Home</Link>
                    </MDBNavItem>
                    
                    <MDBNavItem>
                        <Link exact to="/dist/">Settings</Link>
                    </MDBNavItem>
                    <MDBNavItem>
                        <Link exact to="/dist/">Filters</Link>
                    </MDBNavItem>


                </MDBNavbarNav>
            </MDBNavbar>
            
            
            <Switch>
                <Route path="/dist/">
                    <Filters />
                </Route>
            </Switch>

            
        </Router>
    );
};

export default Navbar;
