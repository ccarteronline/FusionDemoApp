exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['protractor/**/*.spec.js'],

    jasmineNodeOpts: {
        showColors: true,
        print: function () {}
    },

    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    }

};
