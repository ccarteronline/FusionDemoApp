(function () {
    'use strict';
    angular
        .module('FusionApp')
        .controller('MainCtrl', MainCtrl);

        function MainCtrl ($scope, $mdSidenav, $log, $location, AuthorResource, TeacherResource) {
            var vm = this;
            var defaultSideBarTitle = 'Side Bar';
            vm.appTitle = 'Fusion Demo App';
            vm.toggleSideMenu = buildToggler('left');
            vm.sidebarTitle = defaultSideBarTitle;
            vm.navigationButtons = ['Authors', 'Teachers', 'JSON'];
            vm.sideBarList = [];

            // When navigation button selected, handle what happens
            vm.selectButton = function (btnName, isCollapsed) {
                vm.sidebarTitle = btnName;
                if (btnName === 'Authors') {
                    if (!isCollapsed) {
                        vm.toggleSideMenu();
                    }
                    vm.sideBarList = AuthorResource.getJSON();
                } else if (btnName === 'Teachers') {
                    if (!isCollapsed) {
                        vm.toggleSideMenu();
                    }
                    vm.sideBarList = TeacherResource.getJSON();
                } else if (btnName === 'JSON') {
                    if (isCollapsed) {
                        vm.toggleSideMenu();
                    }
                    vm.sidebarTitle = defaultSideBarTitle;
                    vm.sideBarList = [];
                    $location.url('/json');
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
