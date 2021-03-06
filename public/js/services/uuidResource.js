/*jshint bitwise: false*/
(function () {
    'use strict';
    angular
        .module('FusionApp')
        .factory('UUIDResource', function UUIDResourceFactory() {
            function S4() {
                return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            }
            function uuid() {
                return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
            }
            return {
                uuid: uuid
            };

        });
})();
