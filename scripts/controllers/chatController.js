angular
    .module('whattsApp')
    .controller('chatController', chatController);

chatController.$inject = ['$scope','$http', '$routeParams'];

function chatController($scope, $http, $routeParams){

    var sock = new SockJS('http://');

    $scope.messages = [];

    $http.get('scripts/data.json').success(function(data){
    $scope.details = data;
    $scope.whichGroup=$routeParams.groupId;

    });
  
    $scope.sendMessage  = function () {
         sock.send($scope.new_reply);
         $scope.messages.push(this.new_reply);
         $scope.new_reply='';
     };

    sock.onmessage = function(e) {
            $scope.messages.push(e.data);
            $scope.$apply();
        };
    
/**
    function getchatdetails($routeParams.groupId){
        return $http({
            method: 'GET',
            url: 'scripts/data.json' + groupId,
            crossDomain: true,
            xhrFields: { withCredentials: true },
        }).success(function(data) {
                $scope.details = data;
                $scope.messages.push(details.new_message);
            });
    }


    function sendMessage() {

        var reply = {
            "user_id": $cookies.get("user_id"),
            "description": $scope.new_reply,
        };
        $http({
                method: 'POST',
                url: '',
                data: JSON.stringify(reply),
                crossDomain: true,
                xhrFields: { withCredentials: true },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .success(function(data, status, headers, config) {
                $scope.new_reply = "";
                $route.reload();

            })
    }**/
    
    }


