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

        });

        // it('should be able to remove courses', function () {
        //     var btn = $('.md-primary')[1];
        //     btn.click();
        //     browser.pause();
        //     // var course = navSidebar.authorCourse(0);
        //     // course.then(function (data) {
        //     //     console.log(data);
        //     //     data.click();
        //     // });
        //     // var courses = extras.arrayByRepeater('course in vm.author.courses').then(function (data) {
        //     //     return data;
        //     // });
        //
        //     //console.log(courses);
        //
        // });


    });

}());
