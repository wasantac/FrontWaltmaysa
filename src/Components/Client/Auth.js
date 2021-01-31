import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ClienteHead from './ClienteHead';
const Auth = ({match}) => {
    return (
        <div>
            <ClienteHead></ClienteHead>
            <Route path={"/auth/login"} component={Login}/>
            <Route path={"/auth/register"} component={Register}/>
        </div>
    );
}

export default Auth;
