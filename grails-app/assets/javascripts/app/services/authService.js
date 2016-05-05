app.service('authService', function($http){

    var username ='';
    var authToken ='';
    var currentUser;

    var Login = function (accountHandle, accountPassword) {
        return $http.post('/api/login', {username: accountHandle, password: accountPassword })
    };
    var isLoggedIn = function(){
        return (username)? username : false;
    };

    var getUsername = function(){
        return username
    };

    var setCredentials = function(accountHandle){
        username = accountHandle
    };
    var setToken = function(token){
        authToken = token
    };

    var getToken = function(){
        return authToken
    };

    var destroyToken = function(){
        authToken = undefined;
        username = undefined;
        currentUser = undefined;

    };


    return {
        Login : Login,
        isLoggedIn:isLoggedIn,
        setCredentials: setCredentials,
        getUsername: getUsername,
        setToken : setToken,
        getToken: getToken,
        destroyToken:destroyToken
        };


});