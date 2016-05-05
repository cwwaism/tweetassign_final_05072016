app.controller('postingController', function($scope, authService, msgService){

    var currentUser = authService.getUsername();
    var token = authService.getToken();


    $scope.postMessage = function(msgText)
    {
        console.log(msgText);
        console.log(currentUser);
        msgService.postMessages(currentUser, msgText, token)
            .then(function (response) {
                console.log(response.data);
                    $scope.messages.unshift(response.data);
                    $scope.alerts =[{msg: 'Message posted!', type: 'success'}];
                    console.log($scope.messages);
                    return response.data;
                },
                function (error){
                    console.log("error", error);
                });
    };



});