describe('accountController', function() //a test for account controller
{
    beforeEach(module('app'));

    var $controller;
    var $scope;
    var authService;
    var msgService;

    var currentUser = undefined;

    //instantiating the controller
    beforeEach(inject(function(_$controller_, _authService_,_msgService_ ){
        msgService = _msgService_;
        authService = _authService_;
        $controller = _$controller_;
        $scope ={};

    } ));

    //test in the controller

    describe ('$scope.postMessage', function (){

        beforeEach(function () {
            spyOn(authService, 'currentUser');
            $controller('accountController', {$scope: $scope, authService: authService, msgService: msgService});
        });

        it('defaults the scope showNav to be false with no current user', function () {
            expect(authService.currentUser).toHaveBeenCalled();
            expect($scope.postMessage).toBeFalsy();
        });
    })






});


