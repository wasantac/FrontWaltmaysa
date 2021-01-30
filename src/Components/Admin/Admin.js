import React from 'react';
import Header from '../Client/Header';

import HelmetExport, { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
const Admin = ({match}) => {
    
    return (
        <div>
            <Header/>
            <Route exact path={match.url}></Route>
        </div>
    );
}

export default Admin;
