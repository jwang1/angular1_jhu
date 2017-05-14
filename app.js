(function(angular) {
    'use strict';

    angular.module('DiApp', [])
    .controller('DiController', DiController);

    // the following mistaken put DiController DI; caused the error:
    //      Error: [$injector:unpr] Unknown provider: DiControllerProvider <- DiController <- DiController
    // function DiController($scope, $filter, DiController) {
    function DiController($scope, $filter, $injector) {
        $scope.name = 'Joe';

        $scope.showUpperCase = function() {
            var upCaseFunc = $filter('uppercase');

            $scope.name = upCaseFunc($scope.name);
        };

        //console.log($injector.log(DiController.toString()));
        // $injector.log(DiController);
        console.log($injector.annotate(DiController));
        console.log(DiController);
    }

})(window.angular);