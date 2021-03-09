import React from 'react';
import { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import { connect } from 'react-redux';

import { history } from '../helpers';
import { PrivateRoute } from '../components';
import { alertActions } from '../actions';

import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';


class App extends Component{
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            //clear alert on location change
            this.props.clearAlerts();
        });
    }
  

    render(){
        const { alert } = this.props;
        return(
            <div className = "container">
                { alert.message && 
                    <div className={ `alert ${alert.type}`}>{ alert.message }</div>
                
                }
                <div>
                    <Router history = { history }>
                        <Switch>
                            <PrivateRoute exact path = "/" component = { HomePage} />
                            <Route path = "/login" component = { LoginPage } />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
               </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators) (App);

export { connectedApp as App };