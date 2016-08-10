(function () {
    'use strict';
    angular
        .module('FusionApp')
        .controller('JsonPageCtrl', JsonPageCtrl);

        function JsonPageCtrl (
                $scope,
                $mdDialog,
                $log,
                $location,
                TeacherResource,
                AuthorResource,
                DatabaseResource,
                UUIDResource) {

            var vm = this;
            var preparedJsonOutput = {
                "uuid": UUIDResource.uuid(),
                "authors": AuthorResource.getJSON(),
                "teachers": TeacherResource.getJSON()
            };

            // Place the JSON content to the view
            vm.json_output = angular.toJson(preparedJsonOutput, true);

            // Parse the JSON text then assign it to the services
            vm.replaceJsonData = function replaceJsonData(ev) {
                vm.newJson = JSON.parse(vm.json_output);
                AuthorResource.setJSON(vm.newJson.authors);
                TeacherResource.setJSON(vm.newJson.teachers);

                showDialog('Update JSON Data', 'You have updated the JSON data', ev);
            };

            vm.sendToDB = function sendToDB(ev) {
                DatabaseResource.sendToDB(vm.json_output)
                    .then(function (data) {
                        showDialog('Saved to DB', data.message, ev);
                    })
                    .catch(function (data) {
                        showDialog('Saved to DB', data.message, ev);
                    });
            };

            vm.getFromDB = function getFromDB(ev) {
                if (!$scope.uuid) {
                    alert('You must provide a uuid number');
                } else {
                    var preparedUUID = {
                        "uuid": $scope.uuid
                    };
                    DatabaseResource.getFromDB(preparedUUID)
                        .then(function (data) {
                            console.log(data);
                            vm.json_output = angular.toJson(data, true);
                            showDialog('Get from DB', 'Successfully retreived from DB', ev);
                        })
                        .catch(function (data) {
                            console.log(data);
                            showDialog('Get from DB', data.error, ev);
                        });
                }
            };

            function showDialog(title, message, ev) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title(title)
                        .textContent(message)
                        .ariaLabel('Alert JSON change')
                        .ok('Done')
                        .targetEvent(ev)
                );
            }
        }
})();
