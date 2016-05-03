describe('postingController', function() //a test for account controller
{
    beforeEach(module('app'));

    //mocks to use throughout tests
    var $controller, $scope, authService, msgService, $httpBackend, token, currentUser, messages;


    currentUser = "u";
    token = "xyz123";
    var messages =[{msgText: 'Bonjour'}];

    var authService = {
        getUsername:function(){
            return currentUser;
        },
        getToken: function(){
            return token;
        }
    };

    var msgService = {
        postMessages : function() {
            return $httpBackend.expectPOST("/accounts/" +currentUser + "/messages", {msgText: msgText}).respond(200, messages);
    }
    };


    //instantiating the controller
    beforeEach(inject(function(_$controller_,_authService_,_msgService_, _$httpBackend_ ){
        $scope = {};
        msgService = _msgService_;
        authService = _authService_;
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        //authService.getUsername();
        //authService.getToken();




    } ));



    ////test in the controller
    //
    describe ('$scope.postMessage', function (){

        beforeEach(function () {
            spyOn(authService, 'getUsername');
            spyOn(authService, 'getToken');
            spyOn(msgService, 'postMessages');
            $controller('postingController', {$scope: $scope, authService: authService, msgService: msgService});
        });


//http://stackoverflow.com/questions/30084015/scope-alerts-undefined-when-doing-unit-testing-client-side-with-angularjs-and-j

        it('posting a message', function () {
             $scope = {};
            var msgText = "Bonjour!";
            var currentUser = authService.getUsername();
            var token = authService.getToken()
            //expect(authService.getUsername).toHaveBeenCalled();
            //expect(authService.getToken).toHaveBeenCalled();

            $scope.postMessage(msgText);

                //expect(msgService.postMessages).toHaveBeenCalled();
                //.then(response);
               // $scope.messages = response.data;
                expect($scope.alerts).toBeTruthy();
                expect ($scope.messages[0]).toEqual("Bonjour!")




            //var promise, response, result;
            //promise = msgService.postMessages();
            //
            //promise.then(function(data){
            //    result = data;
            //});
            //
            //response = {
            //    success:true,
            //    data:{
            //
            //    }
            //}
            //$controller.postMessage();
            //$scope.postMessage();
            //$httpBackend.expectPOST("/accounts/" +currentUser + "/messages", {msgText: "Bonjour!"}).respond(200, messages);

            //expect(msgService.postMessages).toHaveBeenCalled();
            //msgService.postMessages(currentUser, "Bonjour!", token);
            //$httpBackend.flush();
            //expect($scope.messages[0]).toEqual('Bonjour!');


        });

        //it('When logged in user posts a message, a message posted alert indicated a message has been posted', function () {
        //    //expect(authService.getUsername).toHaveBeenCalled();
        //    //expect(authService.getToken).toHaveBeenCalled();
        //
        //    msgText = 'Bonjour';
        //    //$scope.postMessage(msgText);
        //    //spyOn(msgService, 'postMessages').andReturn(fakeHttpPromise);
        //    // var token = spyOn(authService, 'getToken');
        //
        //    //spyOn(msgService, 'postMessages')
        //    //scope.postMessage('Bonjour!');
        //    msgService.postMessages(currentUser, msgText, token);
        //    //expect ($scope.alerts).toBeDefined();
        //
        //
        //    //expect($scope.postMessage).toBeTruthy();
        //});




    })






});


