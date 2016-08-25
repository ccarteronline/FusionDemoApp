(function() {
    'use strict';

    describe('Page Navigation: Navigation Bar elements', function() {
        var extras = require('../page-objects/extras');
        var navSidebar = require('../page-objects/navSidebar');
        var navigationLinks = ['AUTHORS', 'TEACHERS', 'JSON', '', '', ''];
        var mainPageUrl = 'http://localhost:7803/';

        it('should navigate to the homepage', function() {
            // Visit the Page
            browser.get(mainPageUrl);

            // Get the current URL and expect it to match the mainPageUrl variable.
            browser.getCurrentUrl().then(function (url) {
                expect(url).toEqual(mainPageUrl);
            })
        });

        it('should have the navigation elements', function () {
            extras.arrayByRepeater('btn in vm.navigationButtons')
                .then(function (arr) {
                    expect(navigationLinks).toEqual(arr);
            });
        });

        it('should open the sideBar for: Authors', function () {
            // Set an item in the sidebar to click
            var authorToClick = navSidebar.itemInSidebar(1);

            // Open the sidebar for AUTHORS
            navSidebar.openSideBarAt(navigationLinks.indexOf('AUTHORS'));

            expect(authorToClick.getText()).toContain('Elizabeth Jones');

            // Click on the Author to go to their page
            authorToClick.click();
        });

        it('should have visited an AUTHORS page', function () {
            browser.getCurrentUrl().then(function (url) {
                expect(url).toContain('/author?uuid=');
            });
        });

        it('should open the sideBar for: Teachers', function () {
            // Set an item in the sidebar to click
            var teacherToClick = navSidebar.itemInSidebar(1);

            // Open the sidebar for TEACHERS
            navSidebar.openSideBarAt(navigationLinks.indexOf('TEACHERS'));

            expect(teacherToClick.getText()).toContain('Janice, Thompson');

            // Click on the Teacher to go to their page
            teacherToClick.click();
        });

        it('should have visited a TEACHERS page', function () {
            browser.getCurrentUrl().then(function (url) {
                expect(url).toContain('/teacher?uuid=');
            });
        });

        it('should have visited the JSON page', function () {
            // Go to the JSON page
            navSidebar.openSideBarAt(navigationLinks.indexOf('JSON'));

            browser.getCurrentUrl().then(function (url) {
                expect(url).toContain('/json');
            });
        });

        it('should go to homescreen when logo text is clicked', function () {
            var logoText = $('.NavigationBar span a');

            logoText.click();

            browser.getCurrentUrl().then(function (url) {
                expect(url).toContain(mainPageUrl);
            });
        });


    });

}());
