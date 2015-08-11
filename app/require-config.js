
require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        angularRoute: '../bower_components/angular-route/angular-route',
        angularMocks: '../bower_components/angular-mocks/angular-mocks',
        requirejs: '../bower_components/requirejs/require',
        d3: '../bower_components/d3/d3',
        app: './scripts/app',
        coreModule: './scripts/coreModule'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        },
        'd3' : {
            'exports': 'd3'
        },
        'app': {
            deps: ['angular', 'coreModule']
        },
        'coreModule': {
            deps: ['angular']
        }
    },

    priority: [
        "angular"
    ],
    deps: window.__karma__ ? allTestFiles : [],
    callback: window.__karma__ ? window.__karma__.start : null,
    baseUrl: window.__karma__ ? '/base/app' : '',
});

require([
    'angular',
    'app',
    'scripts/namespace'
], function(angular, app, namespace) {

    angular.element(document).ready(function() {
        // bootstrap the app manually
        angular.bootstrap(document, [namespace]);
    });
});
