(function(angular) {
    'use strict';

    angular.module('myCalculator', [])
    .controller('myCalculatorController', function($scope) {

        $scope.name = "";
        $scope.totalValue = 0;

        $scope.calculateTotal = function () {
            if (angular.isUndefined($scope.name)) {
                return;
            }

            $scope.totalValue = 0;

            var i;
            for (i = 0; i < $scope.name.length; i++) {
                $scope.totalValue += $scope.name.charCodeAt(i);
            }
        };

        $scope.click = function() {
            return 'click function was called';
        };

    });

})(window.angular);