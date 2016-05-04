describe('postingController', function (){

    var $controller, $scope, authService, msgService, $httpBackend, token, currentUser, messages;
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

    beforeEach(module('app'));


    beforeEach(inject( function($injector){
        $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
        $scope = $injector.get('$rootScope').$new();
        msgService = $injector.get('msgService');

    }));

    //beforeEach(inject(function(_$controller_,_authService_,_$rootScope_, _msgService_, _$httpBackend_ ){
    //    $controller = _$controller_;
    //    $rootScope = _$rootScope_;
    //    $httpBackend = _$httpBackend_;
    //    $scope={};
    //    spyOn(authService, 'getUsername');
    //    spyOn(authService, 'getToken');
    //
    //    $controller('postingController', {$scope: $scope});
    //
    //}));


//http://bencentra.com/code/2015/11/16/unit-testing-angularjs.html

    describe('postMessage', function(){
        var accountHandle = authService.getUsername();
        var data =[{acc: 'u',  msgText: 'Bonjour'}];

        it('post a message', function(){


            $httpBackend.expectPOST('/accounts/u/messages', {msgText: "Bonjour!"}).respond(200, data);
            $controller('postingController', {$scope:$scope});
            $httpBackend.flush();

            expect(typeof $scope.postMessage).toBe('function');
            $scope.postMessage('Bonjour!');

            //spyOn(msgService, 'postMessages');
            msgService.postMessages('u', 'Bonjour!', 'xyz123');
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
