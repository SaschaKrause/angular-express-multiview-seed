function MainPageCtrl($scope, countAreaResizeService, detailCounterService) {

    var defaultDetailTopAreaHeight = $("#detail-top-area").height();

    function scaleTopContainer(event, ui) {

        if (event && ui) {
            $("#detail-top-area").css({height: ui.offset.top});
        }

        countAreaResizeService.areaResized(parseFloat($("#detail-top-area").height()) / parseFloat(defaultDetailTopAreaHeight));


    }

    $("#handle").draggable({ axis: "y",
        scroll: false,
        drag: scaleTopContainer,
        containment: "#handle-constrain-container",
        cursor: "n-resize"});

    $scope.msg = 'ausm main ctrl';

    $scope.emitChange = function emitChange(eventName) {
        this.$emit(eventName);
        console.log(eventName);
    };

    $scope.doStuff = function doStuff(scaleFactor) {
        countAreaResizeService.areaResized(scaleFactor);
    };

    $scope.suspendCounting = function () {
        detailCounterService.suspendCounting();
    };

    $scope.resumeCounting = function () {
        detailCounterService.resumeCounting();
    };

    $scope.safeApply = function (fn) {
        var phase = this.$root.$$phase;
        if (phase == '$apply' || phase == '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
}

MainPageCtrl.$inject = ['$scope', 'countAreaResizeService', 'detailCounterService'];