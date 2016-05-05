//describe('postingController', function (){
//    beforeEach(module('app'));
//
//    var $controller, $scope, authService, msgService, $httpBackend, token, currentUser, $q, deferred;
//    currentUser = "bingbong";
//    token = "xyz123";
//
//
//    var authService = {
//        getUsername:function(){
//            return currentUser;
//        },
//        getToken: function(){
//            return token;
//        }
//    };
//
//    //var msgService = {
//    //
//    //    postMessages :function(){
//    //
//    //    }
//    //}
//
//
//    //instantiating the controller
//    beforeEach(inject(function(_$controller_,_authService_,_$rootScope_, _msgService_, _$httpBackend_, _$q_ ){
//        $scope = _$rootScope_.$new();
//        //$scope={};
//        //console.log('scope1', $scope);
//        msgService = _msgService_;
//        authService = _authService_;
//        $controller = _$controller_;
//        $httpBackend = _$httpBackend_;
//        $q = _$q_;
//        deferred=$q.defer();
//
//
//
//    } ));
//
//
//
//
////http://bencentra.com/code/2015/11/16/unit-testing-angularjs.html
//    //http://jsfiddle.net/onekilo79/LrAhf/
//
//    describe('postMessage', function(){
//
//
//        beforeEach(function(){
//
//            spyOn(authService,'getUsername');
//            spyOn(authService, 'getToken');
//            //spyOn(msgService,'postMessages');
//            spyOn(msgService, 'postMessages').and.returnValue(deferred.promise);
//            $controller('postingController', {$scope:$scope, msgService:msgService});
//            $scope.msgText ="Bonjour!"
//            $scope.postMessage($scope.msgText);
//            $scope.$digest();
//
//
//        })
//
//        it('post a message', function(){
//
//            //currentUser = authService.getUsername();
//            $httpBackend.expectPOST("/accounts/bingbong/messages", {"msgText": "Bonjour!"}).respond(200, {"id":5,"msgText":"Bonjour!","dateCreated":"2016-05-05T01:42:02Z"});
//            msgService.postMessages("bingbong", "Bonjour!", token);
//            //$scope.postMessage("Bonjour!");
//            deferred.resolve({"id": "22",  "msgText": "Bonjour!", "dateCreated":"2016-05-05T01:42:02Z"});
//
//            $httpBackend.flush();
//            expect(msgService.postMessages()).toHaveBeenCalled();
//            //$scope.messages.unshift('Bonjour!');
//            //expect($scope.messages).toEqual( {"acc": 'u',  "msgText": 'Bonjour'});
//
//            //var response;
//            //deferred.promise.then(function(data){
//            //    response= data;
//            //    console.log(response);
//            //
//            //});
//            //console.log($scope.messages);
//
//            //deferred.resolve('Response OK!');
//            //expect($scope).toBeDefined();
//
//            //expect(typeof $scope.postMessage).toBe('function');
//
//
//
//
//
//
//            //console.log($scope.messages);
//            //console.log($scope.alerts);
//
//        });
//
//        it('error', function(){
//
//            deferred.reject();
//            $scope.$apply();
//
//            expect($scope.messages).toBe(undefined);
//
//
//        })
//
//
//
//
//    })
//
//
//
//    //afterEach(function() {
//    //    $httpBackend.verifyNoOutstandingExpectation();
//    //    $httpBackend.verifyNoOutstandingRequest();
//    //});
//
//})
