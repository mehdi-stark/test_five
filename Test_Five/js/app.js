var app = angular.module('myMoments', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'partials/allMoments.html',
            controller: 'allMomentsController'
        })
        .when('/addmoments', {
            templateUrl: 'partials/addMoments.html',
            controller: 'addMomentsController'
        })
        .otherwise({ redirectTo: '/'});
});