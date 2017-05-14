(function(angular) {
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope', '$filter', '$injector'];

    function MsgController($scope, $filter, $injector) {
        $scope.name = 'Joe';
    };

    function sayMessage() {
        $scope.msg = 'some messages from the conference.';

        return $scope.msg;
    }

})(window.angular);