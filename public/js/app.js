var FusionApp =
    angular
        .module('FusionApp', ['ngMaterial', 'ngMessages', 'ngRoute'])
        .run(function ($log) {
            $log.debug('Rubric is running');
        })
        .config(function ($routeProvider) {
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
        });
