app.controller('accountController', function($scope, accService, authService, msgService, $location, $routeParams){

    var currentUser = authService.getUsername();
    var currentUserInfo =  accService.getUserProfile();
    var token = authService.getToken();
    var poster = $routeParams.handle;
    $scope.messages = [];


    //auth stuff
    if (!token && !currentUser){
        $location.path('/login');
       // $scope.isLoggedIn = null
        console.log("No token in acc:" + $scope.isLoggedIn);
    }
    else{
        //is the user the current user or the poster
        var anAccount = !poster ? currentUser : poster;
        //$location.path('/');
        $scope.isLoggedIn = currentUser;
        console.log("token found in acc:" + $scope.isLoggedIn);
    }

    $scope.aToken = token;
    $scope.isLoggedIn = currentUser;
    $scope.poster = poster;
    $scope.state = "Follow";
    $scope.editorEnabled = false;


    //var currentUserFollowing = currentUserInfo.following;

    //if current user is already following poster follow button should say "following"
    if (poster){
        if (poster==currentUser){
            $location.path('/details');
        }
        else {
            var currentUserFollowing = currentUserInfo.following;
            if (currentUserFollowing.indexOf(poster) == -1) {
                $scope.state = "Follow";
            }
            else {
                $scope.state = "Following";
            }
        }
    }



//to get followers
    accService.accountsFollowing(currentUser,token)
        .then(function(response)
        {
        currentUserFollowing = response.data.following;
        },function(error){

            console.log('error', error);
    });


//display messages by user
    msgService.searchMessagesbyPoster(anAccount)
        .then(function(response){
            $scope.messages = response.data;
            return response.data;
        },
        function (error) {
            console.log('error', error);
        });


    //display logged in user info
    accService.findAccount(anAccount, token)
        .then(function(response){
                $scope.accounts = response.data;
                return response.data;
            },
            function (error) {
                console.log('error', error);
            });




    $scope.Follow = function(posterId){
        accService.followAccount(currentUserInfo.id, posterId, token)
            .then(function(response){
                    $scope.accounts = response.data;
                    currentUserInfo.following.push(poster);
                    $scope.state ="Following";
                    return response.data;
                },
                function (error) {
                    console.log('error', error);
                });
    };

    $scope.saveDetails = function(fullName, emailAddress,id)
    {
        accService.updateAccount(fullName, emailAddress, id, token)
            .then(function(response) {
                $scope.accounts.fullName = response.data.fullName;
                $scope.accounts.emailAddress = response.data.emailAddress;
                },
                function(error) {
                    console.log('error', error);
                });

    };

});