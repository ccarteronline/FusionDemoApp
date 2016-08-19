(function() {
    'use strict';
    
    var q = require('q');
    describe('Page Navigation: Navigation Bar elements', function() {

        var navigationLinks = ['AUTHORS', 'TEACHERS', 'JSON', '', '', ''];

        it('should navigate to the homepage', function() {
            // Set the page URL
            var mainPageUrl = 'http://localhost:7803/';

            // Visit the Page
            browser.get(mainPageUrl);

            // Get the current URL and expect it to match the mainPageUrl variable.
            browser.getCurrentUrl().then(function (url) {
                expect(url).toEqual(mainPageUrl);
            })
        });

        it('should have the navigation elements', function () {
            // Create a page object out of this eventually.
            // Why are there 6 items instead of the visual 3?
            // Hamburger and other rogue ones

            var mappedVals = element.all(by.repeater('btn in vm.navigationButtons')
                .column('btn')).map(function (elm) {
                    return elm.getText();
            });
            mappedVals.then(function (arr) {
                expect(navigationLinks).toEqual(arr);
            });
        });

        it('should open the author page', function () {
            // Could be extacted out as a page object
            var btnLinkTitle = 'AUTHORS';
            var index = navigationLinks.indexOf(btnLinkTitle);
            var aboutBtn = element.all(by.css('[ng-click="vm.navigateTo(btn, false)"]')).get(index);

            aboutBtn.click();
            browser.pause();
        });
    });

}());
