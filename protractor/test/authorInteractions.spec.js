(function() {
    'use strict';

    describe('Authors: Interactions', function() {
        var extras = require('../page-objects/extras');
        var navSidebar = require('../page-objects/navSidebar');
        var navigationLinks = ['AUTHORS', 'TEACHERS', 'JSON', '', '', ''];
        var authorsBtn = navigationLinks.indexOf('AUTHORS');
        // Set an item in the sidebar to click
        var authorToClick = navSidebar.itemInSidebar(1);
        var mainPageUrl = 'http://localhost:7803/';

        it('should navigate to the homepage', function() {
            // Visit the Page
            browser.get(mainPageUrl);

            // Get the current URL and expect it to match the mainPageUrl variable.
            browser.getCurrentUrl().then(function (url) {
                expect(url).toEqual(mainPageUrl);
            });
        });

        it('should open the Author: Elizabeth Jones', function () {
            // Open the sidebar for AUTHORS
            navSidebar.openSideBarAt(authorsBtn);

            expect(authorToClick.getText()).toContain('Elizabeth Jones');

            // Click on the Author to go to their page
            authorToClick.click();
        });

        it('should be able to change the author name', function () {
            var name = 'Obiwan Kenobi';
            var authorsName = element(by.model('vm.author.name'));
            authorsName.clear();
            authorsName.sendKeys(name);

            navSidebar.openSideBarAt(authorsBtn);

            expect(authorToClick.getText()).toContain(name);

            authorToClick.click();

        });

        it('should be able to remove courses', function () {
            for (var i = 0; i <= 2; i++) {
                navSidebar.authorCourseDeleteBtn(0).click();
            };

            element.all(by.repeater('course in vm.author.courses')).then(function(btns) {
                console.log(btns.length);
                expect(btns.length).toEqual(0);
                // var btnElement = btns[0].element(by.className('md-button'));
                // expect(btnElement.getText()).toEqual('DELETE COURSE');
                // btnElement.click();
                // console.log(btns.length);

                //browser.pause();
            });

        });

        it('should be able to add courses', function () {
            var mockCourses = [
                {
                    name: 'Midichlorians',
                    year: '2017'
                },
                {
                    name: 'Lightsabers',
                    year: '2017'
                },
                {
                    name: 'Interactive Force Exercises',
                    year: '2017'
                },
                {
                    name: 'Darkside Defense Tactics',
                    year: '2017'
                },
                {
                    name: 'Planetary History',
                    year: '2357'
                }
            ];
            var courseNameInput = element(by.model('newCourseName'));
            var courseYearInput = element(by.model('newCourseYear'));
            var courseAddBtn = element(by.cssContainingText('.md-button', 'Add This Course'));

            for (var c = 0; c<= mockCourses.length-1; c++) {
                courseNameInput.clear();
                courseYearInput.clear();
                courseNameInput.sendKeys(mockCourses[c].name);
                courseYearInput.sendKeys(mockCourses[c].year);
                courseAddBtn.click();
            }

            element.all(by.repeater('course in vm.author.courses')).then(function(btns) {
                expect(btns.length).toEqual(mockCourses.length);

            });

        });

    });

}());
