export function authHeader(){
    //return authorization header with jwt token, gotten after log in
    let storedToken = JSON.parse(localStorage.getItem('token'));

    if(storedToken && storedToken.token){
        return{'Authorization': 'Bearer '+storedToken.token};
    }else{
        return {};
    }
}