(function () {
    'use strict';
    FusionApp
        .controller('JsonPageCtrl', JsonPageCtrl);

        function JsonPageCtrl ($scope, $mdSidenav, $log, $location) {
            var vm = this;
            var testJsonObject = {
                id: "id",
                name: "Nomonus, Matasdonus"
            };
            vm.json_output = JSON.stringify(testJsonObject, null, "    ");
            console.log(vm.json_output);
        }
})();
