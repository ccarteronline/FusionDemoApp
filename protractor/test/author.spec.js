(function() {
    'use strict';

    describe('Author Interactions', function() {

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

    });

}());
