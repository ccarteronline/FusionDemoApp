(function () {
    'use strict';
    FusionApp
        .controller('TeacherCtrl', TeacherCtrl);

        function TeacherCtrl ($scope, $log, $location, TeacherResource) {
            var vm = this;
            var teachers = TeacherResource.getJSON();
            var teacherID = $location.search().uuid;
            var teacherIndex = _.findIndex(teachers, function (o) {
                return o.uuid == teacherID;
            });
            $scope.teacher = teachers[teacherIndex];

            vm.removeClass = function removeClass(i) {
                $scope.teacher.classes.splice(i, 1);
            };

            vm.addCourse = function addCourse(i) {
                $scope.teacher.classes[i].teaching_courses.push({
                    "name": $scope.teacher.newCourseName
                });
            };
            vm.removeCourse = function removeCourse(parentIndex, itemIndex) {
                $scope.teacher.classes[parentIndex].teaching_courses.splice(itemIndex, 1);
            };

            vm.addStudent = function addStudent(i) {
                $scope.teacher.classes[i].students.push({
                    "name" : $scope.teacher.newStudentName
                });
            };

            vm.removeStudent = function removeStudent(parentIndex, itemIndex) {
                $scope.teacher.classes[parentIndex].students.splice(itemIndex, 1);
            }
        }
})();
