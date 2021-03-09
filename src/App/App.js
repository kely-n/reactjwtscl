import React from 'react';
import { Component } from 'react';
import { userService } from '../services';
import '../helpers';
import { authHeader } from '../helpers';

class App extends Component{

    componentDidMount() {
        //userService.login('kely','1234');
        console.warn("header", authHeader());
    }

    render(){
        return(
            <div>
               
            </div>
        );
    }
}

export default App;