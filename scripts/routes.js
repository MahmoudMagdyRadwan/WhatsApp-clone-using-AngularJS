angular
	.module('myApp')
	.config(configurator)
function configurator($routeProvider,$httpProvider, $locationProvider) {

	$routeProvider
        .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'loginController'
                
        })
        .when('/profile', {
             templateUrl : 'views/profile.html',
             controller  : 'profileController'
                
        })
        .when('/group/:groupid', {
                templateUrl: 'views/messages.html',
                controller: 'viewmessagesController'

        })
        .otherwise({
        		redirectTo: 'views/home.html'
        });

        $locationProvider.html5Mode(true);

}	

