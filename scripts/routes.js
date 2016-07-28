
var app = angular.module('myApp', ['ngRoute','ngCookies']);

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
        .when('/group/:groupid', {
                templateUrl: 'views/messages.html',
                controller: 'viewmessagesController'

        })
        .otherwise({
        		redirectTo: 'views/home.html'
        });

});
