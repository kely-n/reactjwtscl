import { alertConstants } from '../constants';

export const alertActions = {
    success,
    error,
    clear
}

function success(){
    return {type: alertConstants.SUCCESS, message};

}

function error(){ 
    return {type: alertConstants.ERROR, message}; 
}

function clear(){ 
    return {type: alertConstants.CLEAR, message}; 
}