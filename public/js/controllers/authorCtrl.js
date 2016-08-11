(function () {
    'use strict';
    angular
        .module('FusionApp')
        .controller('AuthorCtrl', AuthorCtrl);

        function AuthorCtrl ($scope, $log, $location, AuthorResource, UUIDResource) {
            var vm = this;
            vm.authors = AuthorResource.getJSON();
            vm.authorID = $location.search().uuid;
            vm.authorIndex = _.findIndex(vm.authors, function (o) {
                return o.uuid === vm.authorID;
            });

            vm.author = vm.authors[vm.authorIndex];

            vm.removeCourse = function removeCourse(i) {
                vm.author.courses.splice(i, 1);
            };

            vm.addCourse = function addCourse() {
                // Use ng-submit and required field
                // Backend can check for empty fields
                // and validation. Not client side.
                if (!$scope.newCourseName || !$scope.newCourseYear) {
                    alert('You cannot enter a blank class');
                } else {
                    vm.author.courses.push({
                        "uuid" : UUIDResource.uuid(),
                        "name" : $scope.newCourseName,
                        "year" : $scope.newCourseYear
                    });
                }
            };

        }
})();
