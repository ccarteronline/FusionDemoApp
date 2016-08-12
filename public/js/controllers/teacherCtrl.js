(function () {
    'use strict';
    angular
        .module('FusionApp')
        .controller('TeacherCtrl', TeacherCtrl);

        function TeacherCtrl ($scope, $log, $location, TeacherResource, UUIDResource) {
            var vm = this;
            vm.teachers = TeacherResource.getJSON();
            vm.teacherID = $location.search().uuid;
            vm.teacherIndex = _.findIndex(vm.teachers, function (o) {
                return o.uuid === vm.teacherID;
            });
            vm.teacher = vm.teachers[vm.teacherIndex];

            // Add a single course to a teacher entry
            vm.addCourse = function addCourse(i) {
                var courseName = vm.teacher.classes[i].teaching_courses.name;
                vm.teacher.classes[i].teaching_courses.push({
                    "uuid" : UUIDResource.uuid(),
                    "name" : courseName
                });
            };

            // Remove a single course from a teacher entry
            vm.removeCourse = function removeCourse(parentIndex, itemIndex) {
                vm.teacher.classes[parentIndex].teaching_courses.splice(itemIndex, 1);
            };

            // Add a student to a teacher entry
            vm.addStudent = function addStudent(i) {
                var studentName = vm.teacher.classes[i].students.name;
                vm.teacher.classes[i].students.push({
                    "uuid" : UUIDResource.uuid(),
                    "name" : studentName
                });
            };

            // Remove a student from a teacher entry
            vm.removeStudent = function removeStudent(parentIndex, itemIndex) {
                vm.teacher.classes[parentIndex].students.splice(itemIndex, 1);
            };

            // Remove all courses and classes for one teacher.
            vm.removeClass = function removeClass(i) {
                vm.teacher.classes.splice(i, 1);
            };

        }
})();
