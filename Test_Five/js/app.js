var app = angular.module('myMoments', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/allMoments.html',
            controller : 'allMomentsController'
        })
        .when('/', {
            templateUrl: 'partials/addMoments.html',
            controller: 'addMomentsController'
        })

});