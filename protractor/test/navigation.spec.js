(function() {
    'use strict';
    var xtras = require('../page-objects/extras');
    var nav = require('../page-objects/navigationSidebar');

    describe('Page Navigation: Navigation Bar elements', function() {

        var navigationLinks = ['AUTHORS', 'TEACHERS', 'JSON', '', '', ''];
        var mainPageUrl = 'http://localhost:7803/';

        it('should navigate to the homepage', function() {
            // Set the page URL


            // Visit the Page
            browser.get(mainPageUrl);

            // Get the current URL and expect it to match the mainPageUrl variable.
            browser.getCurrentUrl().then(function (url) {
                expect(url).toEqual(mainPageUrl);
            })
        });

        it('should have the navigation elements', function () {

            xtras.arrayByRepeater('btn in vm.navigationButtons').then(function (arr) {
                expect(navigationLinks).toEqual(arr);
            });

        });

        it('should open the sideBar for: Authors', function () {
            var person = nav.itemInSideBar(0);
            nav.openSideBar('AUTHORS', navigationLinks);
            // Could be extacted out as a page object
            // var btnLinkTitle = 'AUTHORS';
            // var index = navigationLinks.indexOf(btnLinkTitle);
            // var authorBtn = element.all(by.css('[ng-click="vm.navigateTo(btn, false)"]')).get(index);
            // var authorToClick = element.all(by.css('[ng-click="showTab(item.type, item.uuid)"]')).get(1);
            //
            // // Open the Side bar
            // authorBtn.click();

            expect(person.getText()).toContain('Elizabeth Jones');

            // Click on the Author to go to their page
            //authorToClick.click();

            //person.click();
        });

        it('should have visited an AUTHORS page', function () {
            browser.getCurrentUrl().then(function (url) {
                expect(url).toContain('/author?uuid=');
            });
        });

        it('should open the sideBar for: Teachers', function () {
            var btnLinkTitle = 'TEACHERS';
            var index = navigationLinks.indexOf(btnLinkTitle);
            var teacherBtn = element.all(by.css('[ng-click="vm.navigateTo(btn, false)"]')).get(index);
            var teacherToClick = element.all(by.css('[ng-click="showTab(item.type, item.uuid)"]')).get(1);

            teacherBtn.click();

            expect(teacherToClick.getText()).toContain('Janice, Thompson');

            teacherToClick.click();
        });

        it('should have visited a TEACHERS page', function () {
            browser.getCurrentUrl().then(function (url) {
                expect(url).toContain('/teacher?uuid=');
            });
        });

        it('should have visited the JSON page', function () {
            var btnLinkTitle = 'JSON';
            var index = navigationLinks.indexOf(btnLinkTitle);
            var jsonBtn = element.all(by.css('[ng-click="vm.navigateTo(btn, false)"]')).get(index);

            jsonBtn.click();

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
