var counterModule = angular.module('counterComponent', []);

counterModule.directive('counter', function createDirective(countAreaResizeService, detailCounterService) {
    return {
        restrict: 'E',
        templateUrl: 'app/components/counter/counterTpl.html',
//        scope: {controls: '@controls'},
        link: function linking($scope, element, attrs) {

            $scope.options = {
                showControls: attrs.showControls
            };

            var countPanelEl = element.find(".countPanel");
            var counterDigitEl = element.find(".countDigit");
            var counterDigitSpacerEl = element.find(".countDigitSpacer");
            var counterDigitColonEl = element.find(".countDigitColon");

            var countPanelInitialHeight = countPanelEl.height();
            var countPanelInitialLineHeight = parseFloat(countPanelEl.css('line-height').split('px')[0]);

            $scope.counter = {
                h1: '-',
                h2: '-',
                m1: '-',
                m2: '-',
                s1: '-',
                s2: '-',
                ms: '-',
                counting: false,
                suspended: false
            };


            countAreaResizeService.listenToResize(resizePanelToScaleFactor);

//            detailCounterService.notifyAt({seconds: 5, when: 'afterStart'}, notifyAfterStart);

            $scope.counter.state = detailCounterService.countreeReference.state;

//            $scope.$watch('counter.s2', function (newValue, oldValue) {
//                console.log("newValue: " + newValue + " oldValue: " + oldValue);
//            }, true);


            $scope.startCounting = function startCounting() {
                detailCounterService.restartCounting(onCountInterval);
            };

            $scope.suspendCounting = function suspendCounting() {
                detailCounterService.suspendCounting();
            };

            $scope.resumeCounting = function resumeCounting() {
                detailCounterService.resumeCounting();
            };

            detailCounterService.notifyAt({event: 'onStart'}, function () {
                $scope.counter.counting = true;
                $scope.counter.suspended = false;
            });

            detailCounterService.notifyAt({event: 'onResume'}, function () {
                $scope.counter.counting = true;
                $scope.counter.suspended = false;
            });

            detailCounterService.notifyAt({event: 'onSuspend'}, function () {
                $scope.counter.counting = false;
                $scope.counter.suspended = true;
            });

            function onCountInterval(countResult) {
                var msPassed = countResult.getMillisecondsLeft();
                var d = countResult.formattedTime().getDays(1);
                var h = countResult.formattedTime().getHours(2);
                var m = countResult.formattedTime().getMinutes(2);
                var s = countResult.formattedTime().getSeconds(2);
                var ms = countResult.formattedTime().getMilliSeconds(3);

                console.log(d + ", " + h + ":" + m + ":" + s + ":" + ms);

                $scope.counter.h1 = h.split('')[0];
                $scope.counter.h2 = h.split('')[1];
                $scope.counter.m1 = m.split('')[0];
                $scope.counter.m2 = m.split('')[1];
                $scope.counter.s1 = s.split('')[0];
                $scope.counter.s2 = s.split('')[1];
                $scope.counter.ms = ms;
                $scope.safeApply();

            }

            function resizePanelToScaleFactor(scaleFactor) {
                countPanelEl.css({height: (countPanelInitialHeight * scaleFactor) + 'px'});
                countPanelEl.css({'line-height': (countPanelInitialLineHeight * scaleFactor) + 'px'});
                counterDigitEl.css({width: counterDigitEl.height() / 1.5 + 'px'});
                counterDigitEl.css({'font-size': counterDigitEl.height() / 1.5 + 'pt'});
                counterDigitColonEl.css({'font-size': counterDigitEl.height() / 1.7 + 'pt'});
                counterDigitSpacerEl.css({width: counterDigitEl.width() / 18 + 'px'});
            }

        }
    }
});