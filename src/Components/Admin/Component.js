import React from 'react';
import Header from './Header.js';
import Navegacion from './Navegacion.js';
import "bs-stepper/dist/css/bs-stepper.min.css";
import '../../js/admin/components.js';
import '../../css/admin/component.css';
import ComponentBody from './ComponentBody.js';
import { Route } from 'react-router-dom';


const Component = ({match}) => {
    
    return (
        <div>
        <Route exact path={match.url}></Route>
        <div className="sidebar-fixed sidebar-dark header-light header-fixed" id="body">
            <div className="wrapper">
                <Navegacion/>
                <div className="page-wrapper">
                    <Header/>            
                    <div className="content-wrapper">
                    <ComponentBody/>            

                   </div>        
    
                </div>
            </div> 
        </div> 
        </div>       
           
        
                
);                    
    
}

export default Component;
