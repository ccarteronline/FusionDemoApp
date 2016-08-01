(function () {
    'use strict';
    FusionApp
        .controller('TeacherCtrl', TeacherCtrl);

        function TeacherCtrl ($scope, $log, $location, TeacherResource) {
            var vm = this;
            vm.teacherID = $location.search().uuid;
            vm.testUser = _.findIndex(TeacherResource, function (o) {
                return o.uuid == vm.teacherID;
            });
            $scope.teacher = TeacherResource[vm.testUser];
            console.log($scope.teacher);
        }
})();
