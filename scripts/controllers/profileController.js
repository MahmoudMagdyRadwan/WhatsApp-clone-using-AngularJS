angular
    .module('whattsApp')
    .controller('profileController', profileController);

profileController.$inject = ['$scope','$http'];

function profileController($scope, $http){
    
$http.get('scripts/data.json').success(function(data){
    $scope.details=data;
});

/**$http({
            method: 'GET',
            url: 'scripts/data.json' + groupId,
            crossDomain: true,
            xhrFields: { withCredentials: true },
        })
        .success(function(data) {
                $scope.details = data;
            });
    }**/



    
}
