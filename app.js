/*
(function(angular) {
    'use strict';

    angular.module('DiApp', [])
    .controller('DiController', DiController);

    // the following mistaken put DiController DI; caused the error:
    //      Error: [$injector:unpr] Unknown provider: DiControllerProvider <- DiController <- DiController
    // function DiController($scope, $filter, DiController) {

    DiController.$inject = ['$scope', '$filter', '$injector'];

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
*/

//  https://javascript-minifier.com/
// after adding line of DiController.$inject = ['$scope', '$filter', '$injector']
!function(o){"use strict";function e(o,n,t){o.name="Joe",o.showUpperCase=function(){var e=n("uppercase");o.name=e(o.name)},console.log(t.annotate(e)),console.log(e)}o.module("DiApp",[]).controller("DiController",e),e.$inject=["$scope","$filter","$injector"]}(window.angular);


// https://javascript-minifier.com/  result not handling well for Angular $ ...
// !function(o){"use strict";function n(o,e,a){o.name="Joe",o.showUpperCase=function(){var n=e("uppercase");o.name=n(o.name)},console.log(a.annotate(n)),console.log(n)}o.module("DiApp",[]).controller("DiController",n)}(window.angular);