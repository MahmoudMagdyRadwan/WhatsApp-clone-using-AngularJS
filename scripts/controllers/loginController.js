angular
    .module('whattsApp')
    .controller('loginController', loginController);

loginController.$inject = ['$scope','$location','$http', '$cookies','$rootScope','authService'];

function loginController($scope, $location, $http, $cookies, $rootScope,authService){
    $scope.GO =function(){
        $scope.isAuthenticated=true;
        $location.path('/profile');
     
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
                $scope.isAuthenticated =true;
    }**/
}
}