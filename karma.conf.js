// karma.conf.js
module.exports = function(config) {
    config.set({
        files: [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-animate/angular-animate.min.js',
            'bower_components/angular-aria/angular-aria.min.js',
            'bower_components/angular-messages/angular-messages.min.js',
            'bower_components/lodash/dist/lodash.js',
            'bower_components/angular-material/angular-material.min.js',
            'public/js/app.js',
            'public/js/**/*.js'
        ],

        frameworks: ['jasmine', 'sinon', 'chai', 'mocha'],

        // coverage reporter generates the coverage
        reporters: ['coverage', 'spec'],

        plugins: [
            'karma-jasmine',
            'karma-spec-reporter',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-sinon',
            'karma-chai',
            'karma-mocha'
        ],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'public/js/*/!(*.test).js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        }
    });
};
