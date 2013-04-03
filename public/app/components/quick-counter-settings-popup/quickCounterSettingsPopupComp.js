var quickCounterSettingsPopupComponent = angular.module('quickCounterSettingsPopupComponent', []);

quickCounterSettingsPopupComponent.directive('quickCounterSettingsPopup', function createDirective(countAreaResizeService) {
    return {
        restrict: 'E',
        templateUrl: 'app/components/quick-counter-settings-popup/quickCounterSettingsPopupTpl.html',
        link: function linkFn($scope, element, attrs) {
            var parent = $("#" + attrs.parent);

            countAreaResizeService.notifyOnResize(resizeComponent);

            // need to be resized on start (otherwise, this component has no height)
            resizeComponent();


            function resizeComponent() {
                // set up the elements height to the parents container height
                element.find('.quick-counter-settings-popup-comp').css({height: parent.height() + "px"});
            }
        }
    }
});
