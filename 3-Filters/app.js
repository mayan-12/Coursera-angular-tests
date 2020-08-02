/************ FILTERS IN ANGULARJS ************/
(
    function () {
        'use strict';    
    
        angular.module('msgApp' , [])
        .controller('msgController' , msgController)
        .filter('loves' , lovesFilter)
        .filter('truth' , truthFilter); 
    
        /************ FILTERS IN ANGULARJS ************/
        // msgController.$inject = ['$scope' , '$filter'];
    
        // function msgController ($scope , $filter) {
        //     $scope.name = "Mayan";
        //     $scope.cookieCost = .45;

        //     $scope.sayMessage = function () {
        //         var msg = "Mayan likes to eat healthy snacks at night!";
        //         var output = $filter('uppercase')(msg);
        //         return output;
        //     };

        //     $scope.stateOfBeing = "1";

        //     $scope.feedMayan = function () {
        //         $scope.stateOfBeing = "2";
        //     };
        // }

        /************ CREATE CUSTOM FILTERS IN ANGULARJS ************/
        msgController.$inject = ['$scope' , 'lovesFilter'];
        function msgController($scope , lovesFilter) {
            $scope.stateOfBeing = "1";

            $scope.sayMessage = function () {
                var msg = "Mayan likes to eat healthy snacks at night!";
                return msg;
            };

            $scope.sayLovesMessage = function () {
                var msg = "Mayan likes to eat healthy snacks at night!";
                msg = lovesFilter(msg);
                return msg;
            };

            $scope.feedMayan = function () {
                $scope.stateOfBeing = "2";
            };
        }


        /***** WITHOUT CUSTOM ARGUEMENTS ****/
        function lovesFilter () {
            return function (input) {
                input = input || "";
                input = input.replace("likes","loves");
                return input;
            };
        }


        /***** WITH CUSTOM ARGUEMENTS ****/
        function truthFilter () {
            return function (input , target , replace) {
                input = input || "";
                input = input.replace(target,replace);
                return input;
            }
        }


    }
    )();