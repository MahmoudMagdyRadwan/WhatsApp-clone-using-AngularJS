
var app = angular.module('whattsApp', ['ngRoute','ngCookies','ngMessages']);

app.config(function($routeProvider){

	$routeProvider
        .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'loginController'
                
        })
        .when('/profile', {
             templateUrl : 'views/profile.html',
             controller  : 'profileController'
                
        })
        .when('/groups/:groupId', {
                templateUrl: 'views/chat.html',
                controller: 'chatController'

        })
        .otherwise({
        		redirectTo: 'views/home.html'
        });

})

;
