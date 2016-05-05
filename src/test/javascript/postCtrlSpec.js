describe('postingController', function(){
    beforeEach(module('app'));

    var $controller, $scope, authService, msgService, $httpBackend, token, currentUser, messages, $q, deferred;
    var response = [{"id":5,"msgText":"Bonjour!","dateCreated":"2016-05-05T01:42:02Z"}];
    //var error = [{"status": 200, "msgError": "No messages"}]

    var accountHandle = "bingbong";
    var authToken = "xyz123";

    var authService = {
        setCredentials: function(){currentUser = accountHandle},
        getUsername:function(){return currentUser;},
        setToken:function(){token = authToken},
        getToken: function(){return token;}
    };

    //instantiating the controller
    beforeEach(inject(function(_$controller_,_authService_,_$rootScope_, _msgService_, _$httpBackend_ ){
        $scope = _$rootScope_.$new();
        msgService = _msgService_;
        authService = _authService_;
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;

        //authService.setCredentials(accountHandle);
        //currentUser = authService.getUsername();
    } ));

    describe('postMessage', function(){

        beforeEach(function(){
            authService.setCredentials(accountHandle);
            authService.setToken(authToken);
            currentUser = authService.getUsername();
            token = authService.getToken();
            $controller('postingController', {$scope: $scope, msgService:msgService, authService:authService });

        });

        it('posts a message', function(){
            $httpBackend.expectPOST("/accounts/bingbong/messages", {msgText: "Bonjour!"}).respond(201,response );
            $scope.postMessage('Bonjour!');
            $httpBackend.flush();
            expect($scope.messages).toContain(response);
            expect($scope.alerts).toBeTruthy();

        });

        it('errors when there is no message', function(){
            $httpBackend.expectPOST("/accounts/bingbong/messages").respond(404);
            $scope.postMessage();
            $httpBackend.flush();
            //expect($scope.messages).toBeUndefined();
            expect($scope.alerts).toBeFalsy();
        })



    });


});
