describe('postingController', function() //a test for account controller
{
    beforeEach(module('app'));

    //mocks to use throughout tests
    var $controller, $scope, $rootScope, authService, msgService, $httpBackend;

    var msgText = "Bonjour!";
    var currentUser = "u";
    var token = "xyz123";
    var messages =[{msgText: 'Bonjour'}];


    //instantiating the controller
    beforeEach(inject(function(_$controller_, _$rootScope_,_authService_,_msgService_, _$httpBackend_ ){
        $scope = {};
        msgService = _msgService_;
        authService = _authService_;
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;


    } ));

//    describe ('currentUser & token', function(){
//
//        beforeEach(function () {
//            spyOn(authService, 'getUsername');
//            spyOn(authService, 'getToken');
//            $controller('postingController', {$scope: $scope, $rootScope: $rootScope, authService: authService, msgService: msgService});
//        });
//
//
//    it('handles valid login', function(){
//
//
//        $httpBackend.expectPOST("/api/login").respond(200, response);
//        authService.Login("u", "p");
//        $httpBackend.flush();
//
//        //$httpBackend.expectPOST('/api/login', {username: 'u', password: 'p'}).respond(200, {username: 'earl', roles: ['root'], 'access_token': 'xyz123'});
//        //authService.Login('u', 'p');
//        //$httpBackend.flush();
//        var user = authService.getUsername();
//        console.log (user);
//        //var token = authService.getToken();
//        //expect(response.data.username).toBeDefined();
//        //expect(response.data.username).toBe('u');
//        //expect(user.roles).toContain('root');
//        //expect(token).toBe('xyz123');
//
//
//    })
//
//
//})

    ////test in the controller
    //
    describe ('$scope.postMessage', function (){

        beforeEach(function () {
            spyOn(authService, 'getUsername');
            spyOn(authService, 'getToken');
            spyOn(msgService, 'postMessages')
            $controller('postingController', {$scope: $scope, $rootScope: $rootScope, authService: authService, msgService: msgService});
        });




        it('posting a message', function () {
            expect(authService.getUsername).toHaveBeenCalled();
            expect(authService.getToken).toHaveBeenCalled();
            //var msgText = 'Bonjour';

            $httpBackend.expectPOST("/accounts/u/messages", {msgText: "Bonjour!"}).respond(200, messages);
            msgService.postMessages("u", "Bonjour!", "xyz");
            //$controller('postingController', {$scope: $scope});

          expect(messages);


        });

        //it('When logged in user posts a message, a message posted alert indicated a message has been posted', function () {
        //    //expect(authService.getUsername).toHaveBeenCalled();
        //    //expect(authService.getToken).toHaveBeenCalled();
        //
        //    msgText = 'Bonjour';
        //    $scope.postMessage(msgText);
        //    //spyOn(msgService, 'postMessages');
        //    // var token = spyOn(authService, 'getToken');
        //
        //    //spyOn(msgService, 'postMessages').andReturn(fakeHttpPromise);
        //    //scope.postMessage('Bonjour!');
        //    //spyOn(msgService, 'postMessages').toHaveBeenCalledWith('Bonjour!');
        //
        //
        //    //expect($scope.postMessage).toBeTruthy();
        //});




    })






});


