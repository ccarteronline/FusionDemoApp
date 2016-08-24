(function() {
    'use strict';

    var Page = require('astrolabe').Page;

    module.exports = Page.create({
        arrayByRepeater: {
            value: function (repeater) {
                return element.all(by.repeater(repeater))
                    .map(function (elm) {
                        return elm.getText();
                });
            }
        }
    });

}());
