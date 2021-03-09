//The user service encapsulates all backend api calls for performing CRUD operations on user data,
 //as well as logging and out of the example application.
 // The service methods are exported via the userService object at the top of the file,
 // and the implementation of each method is located in the function declarations below

 export const userService = {
    login,
    logout
 };

 function login(username, password){
     const requestOptions = {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({ username, password }
        )
     };

     return fetch('http://127.0.0.1:8080/api/authenticate', requestOptions)
        .then(handleResponse) //handle the promise of method in handleResponse method
        .then(result=>{
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify({
                user : username,
                token : result.token
            }));
            console.warn(localStorage.getItem('user'));
        });
 }

 function logout (){
    console.warn("logged out");
 }

 function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
               // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
 }