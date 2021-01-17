import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
const Auth = ({match}) => {
    return (
        <div>
            <Route path={match.url + "/login"} component={Login}/>
            <Route path={match.url + "/register"} component={Register}/>
        </div>
    );
}

export default Auth;
