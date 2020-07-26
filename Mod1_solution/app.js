(
    function() {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.items = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.checkFood = function() {
            if ($scope.items.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var arrayItems = $scope.items.split(',');
                var arrayItemsWithoutEmptys = arrayItems.filter(function(v) {
                    return v.trim() !== '';
                });

                if (arrayItemsWithoutEmptys.length > 3) {
                    $scope.message = 'Too much!';
                } else {
                    $scope.message = 'Enjoy';
                }
            }
        };
    }
})();