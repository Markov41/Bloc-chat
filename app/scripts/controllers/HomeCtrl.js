(function() {
    function HomeCtrl(Room, Message, $scope) {
        $scope.Rooms = Room.all;
        $scope.activeRoom = null;
        $scope.activateRoom = function(room) {
            $scope.activeRoom = room;
            $scope.messages = Message.getByRoomId(room.$id);
        };
        $scope.sendMessage = Message.sendMessage;
    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ["Room", "Message", "$scope", HomeCtrl]);
})();