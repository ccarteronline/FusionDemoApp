(function () {
    'use strict';
    FusionApp
        .controller('MainCtrl', MainCtrl);

        function MainCtrl ($scope, $mdSidenav, $log, $location, AuthorResource, TeacherResource) {
            var vm = this;
            vm.appTitle = 'Fusion Demo App';
            vm.toggleSideMenu = buildToggler('left');
            vm.sidebarTitle = 'Side Bar';
            vm.navigationButtons = ['Authors', 'Teachers', 'JSON'];
            vm.sideBarList = [];
            // Later, get this from DB or local storage
            vm.selectButton = function (btnName) {
                vm.sidebarTitle = btnName;
                if (btnName === 'Authors') {
                    vm.sideBarList = AuthorResource.getJSON();
                    vm.toggleSideMenu();
                } else if (btnName === 'Teachers') {
                    vm.sideBarList = TeacherResource.getJSON();
                    vm.toggleSideMenu();
                } else if (btnName === 'JSON') {
                    $location.url('/json');
                } else {
                    vm.sideBarList = [];
                }
            };

            function buildToggler(navID) {
                return function () {
                    $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            $log.debug("toggle " + navID + " is done");
                        });
                };
            }
        }
})();
