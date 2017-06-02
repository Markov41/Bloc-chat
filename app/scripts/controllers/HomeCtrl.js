(function() {
    function HomeCtrl(Room, $scope) {
        $scope.Rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ["Room", "$scope", HomeCtrl]);
})();