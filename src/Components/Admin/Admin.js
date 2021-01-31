import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header.js';
import Navegacion from './Navegacion.js';
import AdminBody from './AdminBody.js';

const Admin = ({match}) => {
    
    return (
        <div>
            <Route exact path={match.url}></Route>
            <div className="sidebar-fixed sidebar-dark header-light header-fixed" id="body">
                <div className="wrapper">
                    <Navegacion/>
                    <div className="page-wrapper">
                        <Header/>            
                        <div className="content-wrapper">
                        <AdminBody/>            

                       </div>        
        
                    </div>
                </div> 
            </div>     
        </div>       
                    
    );
}

export default Admin;
