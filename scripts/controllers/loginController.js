angular
    .module('myApp')
    .controller('loginController', loginController);

loginController.$inject = ['$scope','$location','$http', '$cookies','$rootScope'];

function loginController($scope, $location, $http, $cookies, $rootScope){
    $scope.GO = GO;
    function GO() {
        $location.path('/profile'); 
        $rootScope.username = "Mahmoud"; 
     
     /**   var obj = {
            'phoneNumber': $scope.inputData.phoneNumber,
        };
        $http({
                method: 'POST',
                url: '',
                data: JSON.stringify(obj),
                xhrFields: { withCredentials: true },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

            })
            .success(function(data, status, headers, config) {
                authService.setCookieData(data);
                $location.path('/profile');
                $rootScope.username = data.username;
    }**/
}
}