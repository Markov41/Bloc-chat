(function() {
    function UsernameModalInstanceCtrl($uibModalInstance, $scope) {

        $scope.ok = function(isValid) {
            if (isValid) {
                $uibModalInstance.close($scope.username);
            }
        };
    }

    angular
        .module('blocChat')
        .controller('UsernameModalInstanceCtrl', ['$uibModalInstance', '$scope', UsernameModalInstanceCtrl]);
})();