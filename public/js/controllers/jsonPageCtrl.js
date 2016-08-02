(function () {
    'use strict';
    FusionApp
        .controller('JsonPageCtrl', JsonPageCtrl);

        function JsonPageCtrl ($scope, $mdSidenav, $log, $location, TeacherResource, AuthorResource) {
            var vm = this;
            var preparedJsonOutput = {
                "authors": AuthorResource.getJSON(),
                "teachers": TeacherResource.getJSON()
            };
            vm.json_output = angular.toJson(preparedJsonOutput, true);
            vm.replaceJsonData = function replaceJsonData() {
                vm.newJson = JSON.parse(vm.json_output);
                AuthorResource.setJSON(vm.newJson.authors);
                TeacherResource.setJSON(vm.newJson.teachers);
            }
        }
})();
