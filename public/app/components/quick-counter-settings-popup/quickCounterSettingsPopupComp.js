var quickCounterSettingsPopupComponent = angular.module('quickCounterSettingsPopupComponent', []);

quickCounterSettingsPopupComponent.directive('quickCounterSettingsPopup', function createDirective(countAreaResizeService) {
    return {
        restrict: 'E',
        templateUrl: 'app/components/quick-counter-settings-popup/quickCounterSettingsPopupTpl.html',
        link: function linkFn($scope, element, attrs) {
            var parent = $("#" + attrs.parent);
            var popupModalContainer = element.find('.quick-counter-settings-popup-comp');

            // listen to the resize events which is broadcasted by the countAreaResizeService
            countAreaResizeService.listenToResize(resizeComponent);

            // need to be resized on start (otherwise, this component has no height)
            resizeComponent();


            function resizeComponent() {
                // set up the elements height to the parents container height
                popupModalContainer.css({height: parent.height() + "px"});
            }
        }
    }
});
