(function () {
    'use strict';
    describe('Controller: SideBarCtrl', function () {

        var scope, vm, location;

        beforeEach(module('FusionApp'));

        beforeEach(inject(function ($rootScope, $controller, $location) {
            scope = $rootScope.$new();
            location = $location;
            vm = $controller('SideBarCtrl', {
                $scope: scope
            });
        }));

        it('should change the url location for authors', function () {
            scope.showTab('author', '71039434-1ee4-4056-155e-03ab86a1bd2c');
            expect(location.url()).toEqual('/author/?uuid=71039434-1ee4-4056-155e-03ab86a1bd2c');
        });

        it('should change the url location for teachers', function () {
            scope.showTab('teacher', '71039434-1ee4-4056-155e-03ab86a1bd2c');
            expect(location.url()).toEqual('/teacher/?uuid=71039434-1ee4-4056-155e-03ab86a1bd2c');
        });

    });
})();
