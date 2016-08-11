(function () {
    'use strict';
    describe('Controller: MainCtrl', function () {

        var scope, vm, location;

        beforeEach(module('FusionApp'));

        beforeEach(inject(function ($rootScope, $controller, $location) {
            scope = $rootScope.$new();
            location = $location;
            vm = $controller('MainCtrl', {
                $scope: scope
            });
        }));

        it('should have an App Title', function () {
            expect(vm.appTitle).toBe('Fusion Demo App');
        });

        it('should have default navigation buttons', function () {
            var expected = ['Authors', 'Teachers', 'JSON'];
            expect(vm.navigationButtons).toEqual(expected);
        });

        it('should open the sidebar and display: Authors', function () {
            vm.navigateTo('Authors', false);
            expect(vm.sideBarList[0].type).toBe('author');
        });

        it('should open the sidebar and display: Teachers', function () {
            vm.navigateTo('Teachers', false);
            expect(vm.sideBarList[0].type).toBe('teacher');
        });

        it('should open the sidebar and navigate to JSON', function () {
            vm.navigateTo('JSON', false);
            expect(vm.sidebarTitle).toBe('Side Bar');
            expect(vm.sideBarList).toEqual([]);
            expect(location.url()).toEqual('/json');
        });

    });
})();
