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
                console.log('Get: ');
            }

            return {
                sendToDB: sendToDB,
                getFromDB: getFromDB
            };
        });
})();
