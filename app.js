(function(angular) {
    angular.module('MyExpressionInterpolationApp', [])
    .controller('MyExpressionInterpolationController', MyExpressionInterpolationController);

    MyExpressionInterpolationController.$inject = ['$scope', '$filter', '$injector'];

    function MyExpressionInterpolationController($scope, $filter, $injector) {
        $scope.size = 'small';

        $scope.toggleSize = function() {
            if ($scope.size == 'small') {
                $scope.size = 'large';
            } else {
                $scope.size = 'small';
            }
        }
    }
})(window.angular);