(function () {
    'use strict';
    describe('Controller: AuthorCtrl', function () {

        var scope, vm, location, authors, originalCourseLength;

        beforeEach(module('FusionApp'));

        beforeEach(inject(function ($rootScope, $controller, $location) {
            scope = $rootScope.$new();
            location = $location;
            vm = $controller('AuthorCtrl', {
                $scope: scope
            });

            // Set the location url to and pass in a mock uuid to load an author
            location.url('/author?uuid=a21dfb40-ae71-425e-fe07-28645b5b6574');

            // Since the uuid is generated for the default hardcoded values,
            // set the author as a value and use its generated uuid value.
            authors = vm.authors;

            // Set the author as the first item in the array of authors.
            // This is the same as choosing a single author by uuid number.
            vm.author = authors[0];
        }));

        it('should be able to remove a course', function () {
            // Set the original course length before removing it
            originalCourseLength = vm.author.courses.length;

            // Call the function that removes a specific course based on the $index
            vm.removeCourse(0);

            expect(vm.author.courses.length).not.toEqual(originalCourseLength);

        });

        it('should be able to add a course', function () {
            // Define the scope variables mocking what will come back from
            // the input fields. add new Course Name and new Course Year
            scope.newCourseName = 'Angular Unit Testing';
            scope.newCourseYear = '2016';

            // Set the original course length before removing it
            originalCourseLength = vm.author.courses.length;

            // Call the function the adds a new course based on new input fields
            vm.addCourse();

            expect(vm.author.courses.length).not.toEqual(originalCourseLength);
        });

    });
})();
