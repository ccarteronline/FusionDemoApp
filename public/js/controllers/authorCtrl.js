(function () {
    'use strict';
    angular
        .module('FusionApp')
        .controller('AuthorCtrl', AuthorCtrl);

        function AuthorCtrl ($scope, $log, $location, AuthorResource, UUIDResource) {
            var vm = this;
            var authors = AuthorResource.getJSON();
            var authorID = $location.search().uuid;
            var authorIndex = _.findIndex(authors, function (o) {
                return o.uuid === authorID;
            });

            $scope.author = authors[authorIndex];

            vm.removeCourse = function removeCourse(i) {
                $scope.author.courses.splice(i, 1);
            };

            vm.addCourse = function addCourse() {
                // Use ng-submit and required field
                // Backend can check for empty fields
                // and validation. Not client side.
                if (!$scope.newCourseName || !$scope.newCourseYear) {
                    alert('You cannot enter a blank class');
                } else {
                    $scope.author.courses.push({
                        "uuid" : UUIDResource.uuid(),
                        "name" : $scope.newCourseName,
                        "year" : $scope.newCourseYear
                    });
                }
            };

        }
})();
