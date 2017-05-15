(function(angular) {
    angular.module('MyFilterApp', [])
    .controller('MyFilterController', MyFilterController);

    MyFilterController.$inject = ['$scope', '$filter', '$injector'];

    function MyFilterController($scope, $filter, $injector) {
        $scope.size = 'small';

        $scope.rate = .53;

        $scope.makeNameUppercase = function() {
            if ($scope.name) {
                $scope.nameUppercase = $filter('uppercase')($scope.name);
            }
        };

        $scope.toggleSize = function() {
            if ($scope.size == 'small') {
                $scope.size = 'large';
            } else {
                $scope.size = 'small';
            }
        }
    }
})(window.angular);