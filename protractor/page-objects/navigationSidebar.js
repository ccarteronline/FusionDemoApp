(function() {
    'use strict';

    var Page = require('astrolabe').Page;

    module.exports = Page.create({
        openSideBar: {
            value: function (byTitle, links) {
                var i = links.indexOf(byTitle);

                var authorBtn = element.all(by.css('[ng-click="vm.navigateTo(btn, false)"]')).get(i);
                authorBtn.click();
            }
        },

        itemInSideBar: {
            get: function (i) {
                return element.all(by.css('[ng-click="showTab(item.type, item.uuid)"]')).get(i);
            }
        }
    });

}());
