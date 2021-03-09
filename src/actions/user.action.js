//Contains Redux action creators for actions related to users login and authentication.
// Public action creators are exposed via the userActions object at the top
// of the file and function implementations are located below, 
//I like this structure because you can quickly see all of the actions that 
//are available

import { history } from '../helpers';
import { userService } from '../services';
import { alertActions } from './';
import { userConstants } from '../constants';

export const userActions = {
    login,
    logout
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
        .then(
            user => {
                dispatch(success(user));
                history.push('/');
            }, 
            error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        );
    };

    function request(user) { return {type: userConstants.lOGIN_REQUEST, user }}

    function success(user) { return {type: userConstants.LOGIN_SUCCESS, user }}

    function failure (error) { return {type: userConstants.LOGIN_FAILURE, error }}
}

function logout(){
    userService.logout();
    return{type: userConstants.LOGOUT };
}
