

define([
        'angular',
        'angularRoute',
        'd3'
],function(angular, angularRoute){

    'use strict';

    var controllerName = 'main.controller';
    var controller = function($scope, $rootScope){
        console.log('in main controller');

        var vm = this;
        vm.title = "Marvel Characters Search";
        vm.secondTile = "This is title from VM...!";

        return vm;
    };

    var bubbleChartDirective = function($http){

        var linker = function(scope, element, attr){
            console.log('Bubble Directive');

            var diameter = 960,
                format = d3.format(",d"),
                color = d3.scale.category20c();

            var bubble = d3.layout.pack()
            .sort(null)
            .size([diameter, diameter])
            .padding(1.5);

            var svg = d3.select("bubble-chart").append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .attr("class", "bubble");

            var marvelData={};
            $http.get('./resources/data/marvel-characters.json').success(function(response) {
                marvelData.content = response.data;
            });


//            d3.json("./resources/data/marvel-characters.json", function(error, root) {
//                console.log('hello');
//                if (error) { throw error };

//                var node = svg.selectAll(".node")
//                .data(bubble.nodes(classes(root))
//                      .filter(function(d) { return !d.children; }))
//                .enter().append("g")
//                .attr("class", "node")
//                .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
//
//                node.append("title")
//                    .text(function(d) { return d.className + ": " + format(d.value); });
//
//                node.append("circle")
//                    .attr("r", function(d) { return d.r; })
//                    .style("fill", function(d) { return color(d.packageName); });
//
//                node.append("text")
//                    .attr("dy", ".3em")
//                    .style("text-anchor", "middle")
//                    .text(function(d) { return d.className.substring(0, d.r / 3); });
//            });

            // Returns a flattened hierarchy containing all leaf nodes under the root.
//            function classes(root) {
//                var classes = [];
//
//                function recurse(name, node) {
//                    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
//                    else classes.push({packageName: name, className: node.name, value: node.size});
//                }
//
//                recurse(null, root);
//                return {children: classes};
//            }
//
//            d3.select(self.frameElement).style("height", diameter + "px");

        };

        return {
            restric: 'A',
            link: linker
        };
    };

    angular.module('coreModule', ['ngRoute'])
    .controller(controllerName, controller)
    .directive('bubbleChart',bubbleChartDirective)
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
