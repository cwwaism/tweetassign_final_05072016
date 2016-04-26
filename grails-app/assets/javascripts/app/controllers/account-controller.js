/**
 * Created by nayna on 4/5/2016.
 */
app.controller('accountController', function($scope, accService, authService, msgService, $location, $routeParams){

    var currentUser = authService.getUsername();
    var currentUserInfo =  accService.getUserProfile();
    var token = authService.getToken();
    var poster = $routeParams.handle;
    $scope.messages = [];

    console.log("Logged in User in acc controller " + currentUser);
    console.log("Poster in acc controller " + $routeParams.handle);
    console.log("User id of logged in user in acc controller " + currentUserInfo.id);
    console.log("following of logged in user in acc controller " + currentUserInfo.following);



    //auth stuff
    if (!token && !currentUser){
        $location.path('/login');
       // $scope.isLoggedIn = null
        console.log("No token in acc:" + $scope.isLoggedIn);
    }
    else{

        var anAccount = !poster ? currentUser : poster;
        //$location.path('/');
        $scope.isLoggedIn = currentUser;
        console.log("token found in acc:" + $scope.isLoggedIn);
    }

    //is the user the current user or the poster

    $scope.aToken = token;
    $scope.isLoggedIn = currentUser;
    $scope.poster = poster;
    $scope.state = "Follow";
    $scope.editorEnabled = false;

    console.log("Logged in User in acc controller " + currentUser);
    console.log("Poster in acc controller " + $routeParams.handle);
    console.log("User id of logged in user in acc controller " + currentUserInfo.id);
    console.log("following of logged in user in acc controller " + currentUserInfo.following);
    //var currentUserFollowing = currentUserInfo.following;
    console.log("Poster is " + poster);
    //console.log(currentUserFollowing.indexOf(poster))
    //console.log($scope.Following);
    console.log("Logged in user: " + currentUser);

    //if current user is already following poster follow button should say "following"
    if (poster){
        if (poster==currentUser){
            $location.path('/details');
        }
        else {
            var currentUserFollowing = currentUserInfo.following;
            if (currentUserFollowing.indexOf(poster) == -1) {
                $scope.state = "Follow";
                console.log($scope.state);
            }
            else {
                $scope.state = "Following";
            }
        }
    }



//to get followers
    accService.accountsFollowing(currentUser,token)
    //$scope.Following = function(poster, currentUserInfo){
        .then(function(response)
        {
        var currentUserFollowing = response.data.following;
            console.log(currentUserFollowing);
            console.log(poster);
        },function(error){

            console.log('error', error);
    });

   // }

//post stuff
    $scope.postMessage= function(msgText)
    {

        console.log(msgText);
        console.log(currentUser);

        msgService.postMessages(currentUser, msgText, token)
            .then(function (response) {

                    $scope.messages.unshift(response.data);
                    $scope.alerts =[{msg: 'Message posted!', type: 'success'}];
                    //var tweet = $scope.messages.length + 1;
                    //var item = new String(tweet);
                    //$scope.messages.splice(0,0, item);
                    console.log($scope.messages);
                    return response.data;
                },
                function (error){
                    console.log("error", error);
                });

    };


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
                // currentUserId = $scope.accounts.id;
                return response.data;
            },
            function (error) {
                console.log('error', error);
            });




    $scope.Follow = function(posterId){
        accService.followAccount(currentUserInfo.id, posterId, token)
            .then(function(response){
                    $scope.accounts = response.data;
                    $scope.state ="Following";
                    console.log(response.data + currentUser + "following " + poster);
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

                response.data
                console.log (response.data);
                $scope.accounts.fullName = response.data.fullName;
                $scope.accounts.emailAddress = response.data.emailAddress;

                },
                function(error) {
                    console.log('error', error);

                });

        /*$scope.editorEnabled = true;
        console.log($scope.editorEnabled);
        var updatedCredentials = {
            fullName: $scope.accounts.fullName,
            emailAddress: $scope.accounts.emailAddress,
        };*/


    };


    /*if (!user && !token){
        $location.path('/login');
        $scope.isLoggedIn = null
    }
    else{
        $location.path('/details');
        $scope.isLoggedIn = user;
    }*/


   // var user = authService.getUsername();
   // var token = authService.getToken();
   // var user = $scope.accountHandle






});