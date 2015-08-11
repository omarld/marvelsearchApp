

define([
        'angular',
        'angularRoute'
],function(angular, angularRoute){

    var controllerName = 'main.controller';
    var controller = function($scope, $rootScope){
        console.log('in main controller');

        var vm = this;
        vm.title = "Main controller title";
        vm.secondTile = "This is title from VM...!"

        return vm;
    };

    angular.module('coreModule', ['ngRoute'])
    .controller(controllerName, controller)
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'views/main.html',
            controller: controller,
            controllerAs: 'main'
        }).otherwise({
            redirectTo: '/'
        })
    });

});
