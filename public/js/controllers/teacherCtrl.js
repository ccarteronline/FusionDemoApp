(function () {
    'use strict';
    angular
        .module('FusionApp')
        .controller('TeacherCtrl', TeacherCtrl);

        function TeacherCtrl ($scope, $log, $location, TeacherResource, UUIDResource) {
            var vm = this;
            var teachers = TeacherResource.getJSON();
            var teacherID = $location.search().uuid;
            var teacherIndex = _.findIndex(teachers, function (o) {
                return o.uuid === teacherID;
            });
            $scope.teacher = teachers[teacherIndex];

            // Add a single course to a teacher entry
            vm.addCourse = function addCourse(i) {
                var courseName = $scope.teacher.classes[i].teaching_courses.name;
                $scope.teacher.classes[i].teaching_courses.push({
                    "uuid" : UUIDResource.uuid(),
                    "name" : courseName
                });
            };

            // Remove a single course from a teacher entry
            vm.removeCourse = function removeCourse(parentIndex, itemIndex) {
                $scope.teacher.classes[parentIndex].teaching_courses.splice(itemIndex, 1);
            };

            // Add a student to a teacher entry
            vm.addStudent = function addStudent(i) {
                var studentName = $scope.teacher.classes[i].students.name;
                $scope.teacher.classes[i].students.push({
                    "uuid" : UUIDResource.uuid(),
                    "name" : studentName
                });
            };

            // Remove a student from a teacher entry
            vm.removeStudent = function removeStudent(parentIndex, itemIndex) {
                $scope.teacher.classes[parentIndex].students.splice(itemIndex, 1);
            };

            // Remove an entire teacher entry
            vm.removeClass = function removeClass(i) {
                $scope.teacher.classes.splice(i, 1);
            };

        }
})();
