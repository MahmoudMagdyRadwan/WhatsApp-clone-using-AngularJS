angular
    .module('whattsApp')
    .controller('chatController', chatController);

chatController.$inject = ['$scope','$http', '$routeParams'];

function chatController($scope, $http, $routeParams){


     $scope.messages = [];
     $scope.new_reply='';

    $http.get('scripts/data.json').success(function(data){
    $scope.groupname = data;
    $scope.whichGroup=$routeParams.groupId;

  });

	/**function getchatdetails($routeParams.groupId){
		return $http({
            method: 'GET',
            url: 'scripts/data.json' + groupId,
            crossDomain: true,
            xhrFields: { withCredentials: true },
        }).success(function(data) {
                $scope.details = data;
            });
    }**/

   


 $scope.submit = function () {


       $scope.messages.push(this.new_reply);
       $scope.new_reply='';
            }
    }


/**function Addreply() {

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

