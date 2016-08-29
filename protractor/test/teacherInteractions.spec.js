(function() {
    'use strict';
    describe('Teachers: Interactions', function () {
        //var extras = require('../page-objects/extras');
        var navSidebar = require('../page-objects/navSidebar');
        var navigationLinks = ['AUTHORS', 'TEACHERS', 'JSON', '', '', ''];
        var teachersBtn = navigationLinks.indexOf('TEACHERS');
        var teacherToClick = navSidebar.itemInSidebar(1);
        var mainPageUrl = 'http://localhost:7803/';

        it('should navigate to the homepage', function() {
            // Visit the Page
            browser.get(mainPageUrl);

            // Get the current URL and expect it to match the mainPageUrl variable.
            browser.getCurrentUrl().then(function (url) {
                expect(url).toEqual(mainPageUrl);
            });
        });

        it('should open the Teacher: Janice, Thompson', function () {
            // Open the sidebar for AUTHORS
            navSidebar.openSideBarAt(teachersBtn);

            expect(teacherToClick.getText()).toContain('Janice, Thompson');

            // Click on the Author to go to their page
            teacherToClick.click();
        });

        it('should be able to change the teacher name', function () {
            var teachersName = element(by.model('vm.teacher.name'));
            teachersName.clear();
            teachersName.sendKeys(browser.params.tester.name);

            navSidebar.openSideBarAt(teachersBtn);

            expect(teacherToClick.getText()).toContain(browser.params.tester.name);

            teacherToClick.click();

        });

        it('should be able to change the class name', function () {
            var className = element(by.model('class.name'));
            className.clear();
            className.sendKeys('Force Studies');
            //expect(className.getText()).toEqual('Force Studies');
        });

        it('should be able to remove courses', function () {
            var teacherDeleteCourseBtn = element();
            for (var c = 0; c<=3; c++) {
                navSidebar.teacherCourseDeleteBtn(0).click();
            }
            element.all(by.repeater('course in class.teaching_courses')).then(function(courses) {
                expect(courses.length).toEqual(0);
            });
        });

        it('should be able to add courses', function () {
            var newCourses = [
                {
                    name: 'Advanced Force Tactics'
                },
                {
                    name: 'Advanced Jedi Training'
                },
                {
                    name: 'In Battle Force Practices'
                }
            ];
            var addCourseInput = element(by.model('vm.teacher.classes[$index].teaching_courses.name'));
            var courseAddBtn = element(by.css('[ng-click="vm.addCourse($index)"]'));
            for (var c = 0; c<= newCourses.length-1; c++) {
                addCourseInput.clear();
                addCourseInput.sendKeys(newCourses[c].name);
                courseAddBtn.click();
            }
            element.all(by.repeater('course in class.teaching_courses')).then(function(courses) {
                expect(courses.length).toEqual(newCourses.length);
            });

        });

    });
}());
