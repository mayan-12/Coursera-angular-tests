/************ DEPENDENCY INJECTION ************/
// (
// function () {
//     'use strict';    

//     angular.module('DIapp' , [])
//     .controller('DIcontroller' , DIcontroller); 

//     DIcontroller.$inject = ['$scope' , '$filter'];

//     function DIcontroller ($scope , $filter) {
//         $scope.name = "Mayan";

//         $scope.upper = function () {
//             var upCase = $filter('uppercase');
//             $scope.name = upCase($scope.name);
//         };
//     }
// }
// )();



/************ DEPENDENCY INJECTION (MIN) ************/
// !function(){"use strict";
//     function n(n,e){n.name="Mayan",n
//     .upper=function(){var a=e("uppercase");n.name=a(n.name)}}
//         angular.module("DIapp",[])
//         .controller("DIcontroller",n),n.$inject=["$scope","$filter"]}();



/************ DEPENDENCY INJECTION ************/
(
    function () {
        'use strict';    
    
        angular.module('msgApp' , [])
        .controller('msgController' , msgController); 
    
        msgController.$inject = ['$scope'];
    
        function msgController ($scope) {
            $scope.name = "Mayan";

            $scope.sayMessage = function () {
                return "Mayan likes to eat healthy snacks at night!";
            };

            $scope.stateOfBeing = "1";

            $scope.feedMayan = function () {
                $scope.stateOfBeing = "2";
            };
        }


    }
    )();