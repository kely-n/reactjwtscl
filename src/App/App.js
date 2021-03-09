import React from 'react';
import { Component } from 'react';
import { userService } from '../services';
import '../helpers';
import { authHeader } from '../helpers';

class App extends Component{

    componentDidMount() {
        console.warn("header", authHeader());
       // userService.login('kely','1234');
    }

    render(){
        return(
            <div>
               
            </div>
        );
    }
}

export default App;