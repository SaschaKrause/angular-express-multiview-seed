function MainPageCtrl($scope, countAreaResizeService, detailCounterService) {
    $scope.msg = 'ausm main ctrl';

    $scope.emitChange = function emitChange(eventName){
        this.$emit(eventName);
        console.log(eventName);
    };

    $scope.doStuff = function doStuff(scaleFactor) {
        countAreaResizeService.areaResized(scaleFactor);
    };

    $scope.suspendCounting = function() {
        detailCounterService.suspendCounting();
    };

    $scope.resumeCounting = function() {
        detailCounterService.resumeCounting();
    };

    $scope.safeApply = function(fn) {
        var phase = this.$root.$$phase;
        if(phase == '$apply' || phase == '$digest') {
            if(fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
}

MainPageCtrl.$inject = ['$scope', 'countAreaResizeService', 'detailCounterService'];