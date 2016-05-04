describe('postingController', function(){
    beforeEach(module('app'));

    var $controller, $scope, authService, msgService, $httpBackend, token, currentUser, messages, $q, deferred;

    var authService = {
        getUsername:function(){
            return currentUser;
        },
        getToken: function(){
            return token;
        }
    };

    //instantiating the controller
    beforeEach(inject(function(_$controller_,_authService_,_$rootScope_, _msgService_, _$httpBackend_, _$q_ ){
        $scope = _$rootScope_.$new();
        //console.log('scope1', $scope);
        msgService = _msgService_;
        //authService = _authService_;
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        //$q = _$q_;
        //deferred=$q.defer();
        //spyOn(msgService, 'postMessages').and.returnValue(deferred.promise);
        $controller('postingController', {$scope:$scope, msgService:msgService});
        //$scope.postMessage('Bonjour!');

    } ));

    describe('postMessage', function(){

        beforeEach(function(){

            $controller('postingController', {$scope: $scope});

        });

        it('posts a message', function(){
            $httpBackend.expectPOST("/accounts/u/messages", {"msgText": "Bonjour!"}).respond(201);
            $httpBackend.expectGET("/accounts/u/messages").respond(200, [{acc:"u", msgText: "Bonjour"}]);
            $controller.postMessage();
            $httpBackend.flush();
            expect(msgService.postMessages).toHaveBeenCalled();

        })


    });


})
