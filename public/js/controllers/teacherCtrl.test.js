(function () {
    'use strict';
    describe('Controller: TeacherCtrl', function () {

        var scope, vm, location, teachers, originalCourseLength, originalStudentLength;

        beforeEach(module('FusionApp'));

        beforeEach(inject(function ($rootScope, $controller, $location) {
            scope = $rootScope.$new();
            location = $location;
            vm = $controller('TeacherCtrl', {
                $scope: scope
            });

            // Set the location url to and pass in a mock uuid to load an author
            location.url('/teacher?uuid=a21dfb40-ae71-425e-fe07-28645b5b6574');

            // Since the uuid is generated for the default hardcoded values,
            // set the teacher as a value and use its generated uuid value.
            teachers = vm.teachers;

            // Set the teacher as the second item in the array of teachers (Janice Thompson)
            // This is the same as choosing a single teacher by uuid number.
            vm.teacher = teachers[1];

            // Set the length of the array which represents the amount of courses
            originalCourseLength = vm.teacher.classes[0].teaching_courses.length;

            // Set the length of the array which represents the amount of students
            originalStudentLength = vm.teacher.classes[0].students.length;
        }));

        it('should be able to add a new course', function () {
            // Set the new course by defining its name in the ng-model directive
            // This is the same as placing a new name in the course input field.
            vm.teacher.classes[0].teaching_courses.name = 'My New Course';

            // Initiate the method that adds the course to the first index in the
            // array of classes that one teacher can have.
            vm.addCourse(0);

            // We should expect that the array of courses has increased by one entry.
            expect(vm.teacher.classes[0].teaching_courses.length)
                .toEqual(originalCourseLength + 1);

            // We should expect the last item in the array of courses to have our new course by name.
            expect(_.last(vm.teacher.classes[0].teaching_courses).name)
                .toEqual('My New Course');

        });

        it('should be able to remove a course', function () {
            // The parent index is 0 as Janice Thompson only has one class in the array.
            // Pass in 2 which is the third course to be removed
            vm.removeCourse(0, 2);
            expect(vm.teacher.classes[0].teaching_courses.length).toEqual(originalCourseLength - 1);
        });

        it('should be able to add a new student', function () {
            // Set the new student by defining its name in the ng-model directive
            // This is the same as placing a new name in the "Add a student" field
            vm.teacher.classes[0].students.name = 'Chris Carter';

            // Initiate the method that adds the student to the first index in the
            // array of classes that one teacher can have.
            vm.addStudent(0);

            // We should expect that the array of students has increased by one entry.
            expect(vm.teacher.classes[0].students.length).toEqual(originalStudentLength + 1);

            // We should expect the last item in the array of students to have our new student by name.
            expect(_.last(vm.teacher.classes[0].students).name).toEqual('Chris Carter');
        });

        it('should be able to remove a student', function () {
            // The parent index is o as Janice Thompson only has one class in the array.
            // Pass in 2 which is the third student to be removed.
            vm.removeStudent(0, 2);
            expect(vm.teacher.classes[0].students.length).toEqual(originalStudentLength - 1);
        });

        it('should remove all classes and courses for a teacher', function () {
            // Set the orignal length of classes for a single teacher
            var originalClassLength = vm.teacher.classes.length;

            // Remove the first class in a possible list of classes
            vm.removeClass(0);

            // expect to have subtracted amount of classes 
            expect(vm.teacher.classes.length).toEqual(originalClassLength - 1);
        });

    });
})();
