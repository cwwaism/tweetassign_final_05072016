app.service('accService', function($http){

    var handle ={};
    var currentUserProfile ={};
    var allAccounts ={};

    var getAllAccounts = function(token) {

        $http.defaults.headers.post["Content-Type"] = "application/json";
        return $http({
            url: "/api/accounts",
            method: "GET",
            headers: {
                'X-Auth-Token': token
            }
        })
            .then(function(response){
                    allAccounts = response.data;
                //console.log(response.data);
                    return response.data;
                },
                function(error) {
                    console.log("error", error);
                });
    };

    var setAccount = function(accountHandle){
        handle = accountHandle;
        return handle;
    };


    var updateAccount = function (name, email, id, token){

        $http.defaults.headers.post["Content-Type"] = "application/json";

        return $http({
            url: "/api/accounts/"+ id,
            method: "PUT",
            data: { "fullName": name, "emailAddress": email },
            headers: {
                'X-Auth-Token': token
            }
        });


    };

    var followAccount = function(currentUser, poster,token){

        $http.defaults.headers.post["Content-Type"] = "application/json";
        return $http({
            url: "/accounts/"+ poster +"/follow?follower="+currentUser,
            method: "PUT",
            headers: {
                'X-Auth-Token': token
            }
        });
    };

    var accountsFollowing = function(currentUser,token){

        $http.defaults.headers.post["Content-Type"] = "application/json";
        return $http({
            url: "/accounts/"+ currentUser +"/followers",
            method: "GET",
            headers: {
                'X-Auth-Token': token
            }
        });
    };



    var setUserProfile = function(currentUser, token){

        $http.defaults.headers.post["Content-Type"] = "application/json";
        //$http.get("/accounts/"+ currentUser)
        return $http({
            url: '/api/accounts/'+currentUser,
            method: "GET",
            headers: {
                'X-Auth-Token': token
            }
        })
            .then(function(response){
                    currentUserProfile = response.data;
                },
                function(error) {
                    console.log('error', error);

                })

    };


    var getUserProfile = function(){

        return currentUserProfile;
    };

    var getAccount = function() {
        return handle;
    };

    var findAccount = function(user, token) {
        $http.defaults.headers.post["Content-Type"] = "application/json";
        return $http({
            url: '/api/accounts/'+user,
            method: "GET",
            headers: {
                'X-Auth-Token': token
            }
        });
    };

    return {
        findAccount : findAccount,
        setUserProfile: setUserProfile,
        getUserProfile:getUserProfile,
        getAccount:getAccount,
        setAccount: setAccount,
        followAccount:followAccount,
        accountsFollowing:accountsFollowing,
        getAllAccounts : getAllAccounts,
        updateAccount:updateAccount
    };

});