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
            }
        }
})();
