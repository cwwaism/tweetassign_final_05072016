describe('postingController', function(){
    beforeEach(module('app'));

    var $controller, $scope, authService, msgService, $httpBackend, token, currentUser, messages, $q, deferred;
    var response = [{"id":5,"msgText":"Bonjour!","dateCreated":"2016-05-05T01:42:02Z"}];

    var authService = {
        getUsername:function(){
            return 'bingbong';
        },
        getToken: function(){
            return 'xyz123';
        }
    };

    //instantiating the controller
    beforeEach(inject(function(_$controller_,_authService_,_$rootScope_, _msgService_, _$httpBackend_, _$q_ ){
        $scope = _$rootScope_.$new();
        //console.log('scope1', $scope);
        msgService = _msgService_;
        authService = _authService_;
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

            $scope.postMessage('Bonjour!');
            //msgService.postMessages("bingbong", "Bonjour!", token);
            var response = [{"id":5,"msgText":"Bonjour!","dateCreated":"2016-05-05T01:42:02Z"}];
            //$httpBackend.expectPOST("/accounts/[object Object]/messages", {msgText: "Bonjour!"}).respond(201,{"id":5,"msgText":"Bonjour!","dateCreated":"2016-05-05T01:42:02Z"} );

            //msgService.postMessages.andReturn($q.when({msgText:"Bonjour!"}));


            //$scope.digest();
        });

        it('posts a message', function(){

            //$scope.postMessage('Bonjour!');
            $httpBackend.expectPOST("/accounts/[object Object]/messages", {msgText: "Bonjour!"}).respond(201,{"id":5,"msgText":"Bonjour!","dateCreated":"2016-05-05T01:42:02Z"} );
            controller = $controller('postingController', {$scope: $scope});
            $httpBackend.flush();
            $scope.messages.unshift({"id":5,"msgText":"Bonjour!","dateCreated":"2016-05-05T01:42:02Z"});

            //$httpBackend.expectGET("/accounts/u/messages").respond(200, [{acc:"u", msgText: "Bonjour"}]);
            //$controller.postMessage();

            //expect(con).toHaveBeenCalled();

        })


    });


})
