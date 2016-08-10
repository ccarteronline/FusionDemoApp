(function () {
    'use strict';
    angular
        .module('FusionApp')
        .factory('DatabaseResource', function DatabaseResourceFactory($http, $q) {
            function sendToDB(data) {
                var defer = $q.defer();

                $http({
                    method: 'POST',
                    url: '/api/sendToDB',
                    data: data
                })
                .success(function (data, status, headers, config) {
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                    defer.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                    defer.reject(data);
                });

                return defer.promise;
            }

            function getFromDB() {
                var defer = $q.defer();
                $http({
                    method: 'GET',
                    url: '/api/findEntries'
                })
                .success(function (data, status, headers, config) {
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                    defer.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                    defer.reject(data);
                });

                return defer.promise;
            }

            return {
                sendToDB: sendToDB,
                getFromDB: getFromDB
            };
        });
})();
