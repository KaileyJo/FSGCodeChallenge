var myApp = angular.module('myApp', ['ngRoute', 'smart-table']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'worldBankDataController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);