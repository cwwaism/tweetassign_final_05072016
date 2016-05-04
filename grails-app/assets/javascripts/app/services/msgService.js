app.service('msgService', function($http){

    var someMsg ={};
    //var handle = {};

    var getMessages = function() {
        //return $http.get('/messages');
        return someMsg;
    };

    var setMessages = function(msgResults){
        someMsg = msgResults;
    };

    var searchMessages = function(searchText,token) {


            //return  $http.get("/messages/searchText", {params: {text: searchText}});  //search by message content

        $http.defaults.headers.post["Content-Type"] = "application/json";

        return $http({
            url: "/messages/searchText",
            method: "GET",
            params:{"text": searchText},
            headers: {
                'X-Auth-Token': token
            }
        })


    };

    var searchMessagesbyPoster = function(accountHandle,token) {

        $http.defaults.headers.post["Content-Type"] = "application/json";

        return $http({
            url: '/accounts/'+accountHandle +'/messages',
            method: "GET",
            headers: {
                'X-Auth-Token': token
            }
        })

    };


    var postMessages = function (accountHandle, msgText, token){

        $http.defaults.headers.post["Content-Type"]="application/json";

        return $http({
            url:'/accounts/'+ accountHandle + '/messages',
            method:"POST",
            data: { "msgText": msgText},
            headers:{
                'X-Auth-Token': token
            }
        })

    };


    var searchByTextAndAccHandle=function(searchTerm,token){

        $http.defaults.headers.post["Content-Type"]="application/json";

        return $http({
            url:'/messages/searchTextAndAccHandle',
            method:"GET",
            params:{"text":searchTerm,"accHandle":searchTerm},
            headers:{
                'X-Auth-Token': token
            }
        })
    };


    return {
        //getMessages : function () {return $http.get('/messages');},
        //searchMessages: function (paramText){return  $http.get("/messages/searchText", {params: {text: paramText}});}
        getMessages:getMessages,
        setMessages:setMessages,
        searchMessages: searchMessages,
        searchMessagesbyPoster : searchMessagesbyPoster,
        searchByTextAndAccHandle:searchByTextAndAccHandle,
        postMessages:postMessages
    };

});