import React, { Component } from 'react';


import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";



export default function App (props) {
    return (
        <div>
            <Navbar/>
            <Dashboard/>
        </div>
    );
}

