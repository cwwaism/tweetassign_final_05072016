describe('postingController', function (){
    beforeEach(module('app'));

    var $controller, $scope, authService, msgService, $httpBackend, token, currentUser, messages, $q, deferred;
    currentUser = 'u';
    token = "xyz123";


    var authService = {
        getUsername:function(){
            return currentUser;
        },
        getToken: function(){
            return token;
        }
    };

    //var msgService = {
    //
    //    postMessages :function(){
    //
    //    }
    //}


    //instantiating the controller
    beforeEach(inject(function(_$controller_,_authService_,_$rootScope_, _msgService_, _$httpBackend_, _$q_ ){
        $scope = _$rootScope_.$new();
        //console.log('scope1', $scope);
        msgService = _msgService_;
        //authService = _authService_;
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $q = _$q_;
        deferred=$q.defer();
        spyOn(msgService, 'postMessages').and.returnValue(deferred.promise);
        $controller('postingController', {$scope:$scope, msgService:msgService});
        $scope.postMessage('Bonjour!');

    } ));




//http://bencentra.com/code/2015/11/16/unit-testing-angularjs.html
    //http://jsfiddle.net/onekilo79/LrAhf/

    describe('postMessage', function(){

        it('post a message', function(){

            var response;
            deferred.promise.then(function(data){
                response= data;
                console.log(response);

            });
            console.log($scope.messages);

            //deferred.resolve('Response OK!');
            expect($scope).toBeDefined();

            //expect(typeof $scope.postMessage).toBe('function');

            msgService.postMessages('u', 'Bonjour!', 'xyz123');
            deferred.resolve([{"acc": 'u',  "msgText": 'Bonjour'}]);
            $scope.$apply();



            console.log($scope.messages);
            console.log($scope.alerts);

        });

        it('error', function(){

            //$controller('postingController', {$scope:$scope, msgService:msgService});
            $scope.postMessage();
            //msgService.postMessages('u', 'Bonjour!', 'xyz123');
            deferred.reject();
            $scope.$apply();

            expect($scope.messages).toBe(undefined);


        })

        it('http post a message', function(){


            $httpBackend.expectPOST("/accounts/u/messages", {"msgText": "Bonjour!"}).respond(201);
            //$httpBackend.expectGET("/accounts/u/messages").respond(200, [{acc:"u", msgText: "Bonjour"}]);
            //$controller('postingController', {$scope:$scope,msgService:msgService});
            //$scope.postMessage();
            //$httpBackend.flush();

            //msgService.postMessages('u', 'Bonjour!', 'xyz123');

            //expect(typeof $scope.postMessage).toBe('function');


            //spyOn(msgService, 'postMessages');

            //$httpBackend.flush();



            //

            //var msgText ="Bonjour!";
            //currentUser = authService.getUsername();
            //token = authService.getToken();
            //console.log(currentUser);
            //console.log(token);


            //expect($scope.messages[0]).toContain('Bonjour!');
            //$scope.postMessage(msgText);
            //console.log($scope.alerts);
            //console.log($scope.messages);

        })


    })



    //afterEach(function() {
    //    $httpBackend.verifyNoOutstandingExpectation();
    //    $httpBackend.verifyNoOutstandingRequest();
    //});

})
