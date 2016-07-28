angular
    .module('myApp')
    .controller('loginController', loginController);

loginController.$inject = ['$scope','$location','$http', '$cookies'];

function loginController($scope, $location, $http, $cookies){
    $scope.GO = GO;
    function GO() {
        $location.path('/profile');  
     
     /**   var obj = {
            'phoneNumber': $scope.inputData.phoneNumber,
        };
        $http({
                method: 'POST',
                url: 'http://www.koodet.com:6543/api/login',
                data: JSON.stringify(obj),
                xhrFields: { withCredentials: true },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

            })
            .success(function(data, status, headers, config) {
                authService.setCookieData(data);
                $location.path('/profile');
    }**/
}
}