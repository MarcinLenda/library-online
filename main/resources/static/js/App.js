'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider , $httpProvider) {

    $routeProvider
        .when('/add_book', {
            templateUrl: 'views/add_book.html',
            controller: 'BookCtrl'

        })
        .when('/all_books', {
            templateUrl: '/views/all_books.html',
            controller: 'BookCtrl'

        })

        .otherwise(
            {redirectTo: '/'}
        );

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

});
