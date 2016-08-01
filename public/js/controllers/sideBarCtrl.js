(function () {
    'use strict';
    FusionApp
        .controller('SideBarCtrl', SideBarCtrl);

        function SideBarCtrl ($scope, $mdSidenav, $log, $location) {
            var vm = this;
            $scope.showTab = function (type, id) {
                $location.url('/'+type+'/?uuid='+id);

                // Close the nav bar, later turn this into a factory or service.
                $mdSidenav('left')
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + 'left' + " is done");
                    });
            }
        }
})();
