(function() {
    'use strict';
    var Page = require('astrolabe').Page;
    module.exports = Page.create({
        arrayByRepeater: {
            value: function (r) {
                return element.all(by.repeater(r))
                    .map(function (elm) {
                        return elm.getText();
                });
            }
        }
    });
}());
