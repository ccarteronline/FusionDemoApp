(function () {
    'use strict';
    angular
        .module('FusionApp')
        .controller('JsonPageCtrl', JsonPageCtrl);

        function JsonPageCtrl ($scope, $mdDialog, $log, $location, TeacherResource, AuthorResource) {
            var vm = this;
            var preparedJsonOutput = {
                "authors": AuthorResource.getJSON(),
                "teachers": TeacherResource.getJSON()
            };
            vm.json_output = angular.toJson(preparedJsonOutput, true);
            vm.replaceJsonData = function replaceJsonData(ev) {
                vm.newJson = JSON.parse(vm.json_output);
                AuthorResource.setJSON(vm.newJson.authors);
                TeacherResource.setJSON(vm.newJson.teachers);
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('Update JSON Data')
                        .textContent('You have updated the JSON data')
                        .ariaLabel('Alert JSON change')
                        .ok('Done')
                        .targetEvent(ev)
                ).finally(function () {
                    $location.url('/');
                });
            };
        }
})();
