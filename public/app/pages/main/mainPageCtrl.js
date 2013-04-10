function MainPageCtrl($scope, countAreaResizeService, detailCounterService) {

    // container IDs
    var RESIZE_HANDLER_CONSTRAIN_CONTAINER_ID = "#detail-resize-constrain-container";

    // jquery elements. Fetched only once.
    var jQTopArea = $("#detail-top-area");
    var jQResizeHandler = $('#detail-resize-tool');
    var initialDetailTopAreaHeight = jQTopArea.height();

    /**
     *
     * @param event the mouse events that triggered the resizing
     * @param ui
     */
    function resizeTopContainer(event, ui) {

        // every time this function is invoked, we need to get the new height from the top container
        var currentDetailTopAreaHeight = jQTopArea.height();
        var resizeFactor = parseFloat(currentDetailTopAreaHeight) / parseFloat(initialDetailTopAreaHeight);

        if (event && ui) {
            jQTopArea.css({height: ui.offset.top});
        }

        // broadcast top-area resize event via countAreaResizeService
        countAreaResizeService.fireResizeEvent(resizeFactor);
    }

    // add the dragging functionality to the resizeHandler
    jQResizeHandler.draggable({ axis: "y",
        scroll: false,
        drag: resizeTopContainer,
        containment: RESIZE_HANDLER_CONSTRAIN_CONTAINER_ID,
        cursor: "n-resize"});

    $scope.msg = 'ausm main ctrl';

    $scope.showPopup = function() {
           $scope.page.popupVisible = true;
          console.log("showPopup");
    };
    $scope.page = {
        popupVisible: false
    }
    $scope.emitChange = function emitChange(eventName) {
        this.$emit(eventName);
        console.log(eventName);
    };

    $scope.doStuff = function doStuff(scaleFactor) {
        countAreaResizeService.fireResizeEvent(scaleFactor);
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