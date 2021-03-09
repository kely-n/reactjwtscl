import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialstate = user ? {loggedIn : true, user} : {};

export function authentication(state = initialstate, action) {
    switch (action.type){
        case userConstants.lOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            }
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            }
        case userConstants.LOGIN_FAILURE:
            return {}
        case userConstants.LOGOUT:
            return {}
        default: 
            return state;
    }
}