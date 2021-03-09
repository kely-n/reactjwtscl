//The react private route component renders a route component if the user is logged in, 
//otherwise it redirects the user to the /login page

import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({ component: Component , ...rest })=> (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to = { {pathname: '/login',state: { from: props.location } }}/>
    
    )} />
)