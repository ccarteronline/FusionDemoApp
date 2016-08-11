(function() {
    'use strict';
    angular
        .module('FusionApp', ['ngMaterial', 'ngMessages', 'ngRoute'])
        .run(function ($log) {
            $log.debug('Fusion Demo App is running');
        })
        .config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/partials/main.html'
                })
                .when('/author', {
                    templateUrl: '/partials/author.html'
                })
                .when('/teacher' , {
                    templateUrl: '/partials/teacher.html'
                })
                .when('/json', {
                    templateUrl: '/partials/json.html'
                });

                // Allow pretty urls without # (hash)
                $locationProvider.html5Mode(true);

                $mdThemingProvider.theme('default')
                    .primaryPalette('green')
                    .accentPalette('lime');
                    //.dark();
        });

})();
