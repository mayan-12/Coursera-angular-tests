/************ WATCHERS IN ANGULARJS ************/
(
    function () {
        'use strict';    
    
        angular.module('counterApp' , [])
        .controller('counterController' , counterController); 


        /************ CREATE CUSTOM FILTERS IN ANGULARJS ************/
        counterController.$inject = ['$scope'];
        function counterController($scope) {
            $scope.onceCounter = 0;
            $scope.counter = 0;
            $scope.name = "Mayan";
            
            $scope.showNumberOfWatchers = function () {
                console.log("# of Watchers: " , $scope.$$watchersCount);
                
            };

            $scope.countOnce = function () {
                $scope.onceCounter = 1;
            };

            $scope.upCounter = function () {
                $scope.counter++;
            };

            $scope.$watch( function () {
                console.log("Digest Loop Fired!");
            } )


            // $scope.$watch('onceCounter' , function (newValue,oldValue) {
            //     console.log("oncecounter old value: " , oldValue);
            //     console.log("oncecounter new value: " , newValue);
                
            // });

            // $scope.$watch('counter' , function (newValue,oldValue) {
            //     console.log("counter old value: " , oldValue);
            //     console.log("counter new value: " , newValue);
                
            // });

        }




    }
    )();