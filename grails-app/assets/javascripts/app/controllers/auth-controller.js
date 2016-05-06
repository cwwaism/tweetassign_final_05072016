app.controller('authController', ['$scope', 'authService', 'accService','$location','$rootScope',function ($scope, authService, accService, $location,$rootScope) {

    var currentUser;
    $scope.isLoggedIn = null;
    $scope.logout = false;


    $scope.Login = function () {
        authService.Login($scope.accountHandle, $scope.accountPassword)
            .then(function(response) {

                authService.setCredentials(response.data.username);
                authService.setToken(response.data.access_token);
                accService.setUserProfile(response.data.username, response.data.access_token);
                $scope.aToken = authService.getToken();
                $scope.isLoggedIn = authService.getUsername();
                currentUser = authService.getUsername();
                $location.path('/details');
            },
            function(error) {
                $scope.error = "Invalid Login";
                console.log($scope.error);
            });
        };

       $scope.Logout = function () {

            authService.destroyToken();
            $scope.isLoggedIn = authService.isLoggedIn();
            $rootScope.logout = true;
        };
}]);