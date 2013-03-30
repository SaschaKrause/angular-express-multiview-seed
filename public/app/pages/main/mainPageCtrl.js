function MainPageCtrl($scope, countAreaResizeService) {
    $scope.msg = 'ausm main ctrl';

    $scope.emitChange = function emitChange(eventName){
        this.$emit(eventName);
        console.log(eventName);
    };

    $scope.doStuff = function doStuff(scaleFactor) {
        countAreaResizeService.areaResized(scaleFactor);
    }
}

MainPageCtrl.$inject = ['$scope', 'countAreaResizeService'];