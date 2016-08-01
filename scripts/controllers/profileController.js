angular
    .module('whattsApp')
    .controller('profileController', profileController);

profileController.$inject = ['$scope','$http'];

function profileController($scope, $http){
    
$http.get('scripts/data.json').success(function(data){
    $scope.groupname=data;
});



    
}
