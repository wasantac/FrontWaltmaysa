import React from 'react';
import HelmetExport, { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
const Admin = ({match}) => {
    return (
        <div>
            <Route exact path={match.url}>
                
            </Route>
        </div>
    );
}

export default Admin;
