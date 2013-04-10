var quickCounterSettingsPopupComponent = angular.module('quickCounterSettingsPopupComponent', []);

quickCounterSettingsPopupComponent.directive('quickCounterSettingsPopup', function createDirective(countAreaResizeService) {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'app/components/quick-counter-settings-popup/quickCounterSettingsPopupTpl.html',
        link: function linkFn($scope, element, attrs) {
            var el = element;
            var parentEl = $("#" + attrs.parentEl);
            var positionRelativeTo = $("#" + attrs.positionRelativeTo);
            var popupModalContainer = element.find('.quick-counter-settings-popup-comp');
            var popup = element.find('#quick-counter-real-popup');

            $scope.$watch('page.popupVisible', function(newValue, oldValue) {
                console.log("visible: " + newValue + "---" + positionRelativeTo.offset().top);

                layoutPopup();
            });

            $scope.close = function() {
                $scope.page.popupVisible = false;
            };
            // listen to the resize events which is broadcasted by the countAreaResizeService
            countAreaResizeService.listenToResize(resizeComponent);

            // need to be resized on start (otherwise, this component has no height)
            resizeComponent();


            function resizeComponent() {
                // set up the elements height to the parents container height
                popupModalContainer.css({height: parentEl.height() + "px"});
                layoutPopup();
            }

            function layoutPopup() {
                var offsetTop = positionRelativeTo.offset().top - 10;
                var offsetLeft = positionRelativeTo.offset().left + positionRelativeTo.width() + 22;

                popup.css({left: offsetLeft, top: offsetTop});

            }
        }
    }
});
