angular
    .module('whattsApp')
    .controller('LogoutController', LogoutController);

LogoutController.$inject = ['$http', '$scope', '$rootScope', '$location', 'authService', '$cookies'];

function LogoutController($http, $scope, $rootScope, $location, authService, $cookies) {
    $scope.logout = logout;

    function logout() {

        authService.clearCookieData();
        $location.path('/');
    }
}