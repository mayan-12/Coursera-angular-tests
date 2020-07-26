// (
// function () {
//     'use strict';    

//     angular.module('myFirstApp' , [])
//     .controller('myFirstController' , function ($scope) {
//         $scope.name = "Mayan Sachan";
//         $scope.age = "21";
//     });

// }
// )();

(
function () {
    'use strict';    

    angular.module('nameCalculator' , [])
    .controller('nameCalculatorController' , function ($scope) {
        $scope.name = "";
        $scope.totalValue = 0;

        $scope.displayNumeric = function () {
            var totalNameValue = calculateNumericForString($scope.name);             //get the value
            $scope.totalValue = totalNameValue;
        };

        function calculateNumericForString(string) {
            var totalStringValue = 0;
            for (var i=0; i<string.length; i++) {
                totalStringValue += string.charCodeAt(i);
            }

            return totalStringValue;
        }
    });

}
)();