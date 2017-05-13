(function(angular) {
    'use restrict';

    angular.module("myApp", [])
        .controller("myController", function($scope) {
            $scope.name = "John Doe";

            $scope.click = function() {
                return "clicked function";
            }
        });
})(window.angular);