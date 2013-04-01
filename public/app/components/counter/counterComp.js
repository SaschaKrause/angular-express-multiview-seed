var counterModule = angular.module('counterComponent', []);

counterModule.directive('counter', function createDirective(countAreaResizeService, detailCounterService) {
    return {
        restrict:'E',
        templateUrl:'app/components/counter/counterTpl.html',
//        scope: {controls: '@controls'},
        link:function linking($scope, element, attrs) {


            $scope.options = {
              showControls: attrs.showControls
            };

            var countPanel = element.find(".countPanel");

            var countPanelInitialHeight = countPanel.height();

            $scope.counter = {
                h1:'-',
                h2:'-',
                m1:'-',
                m2:'-',
                s1:'-',
                s2:'-',
                state: detailCounterService.state
            };

            countAreaResizeService.notifyOnResize(resizePanelToScaleFactor);
            detailCounterService.notifyAt({seconds:5, when:'afterStart'}, notifyAfterStart);

            function notifyAfterStart (countreeRef, ms) {
                console.log("notified after start " + ms);
            };

/*            $scope.change = function change() {
                var arr = this.counter.input.split(':');

                this.counter.h1 = arr[0][0];
                this.counter.h2 = arr[0][1];
                this.counter.m1 = arr[1][0];
                this.counter.m2 = arr[1][1];
                this.counter.s1 = arr[2][0];
                this.counter.s2 = arr[2][1];
                this.counter.state =
            };*/

            $scope.counter.state = detailCounterService.countreeReference.state;

            $scope.$watch('counter.s2', function (newValue, oldValue) {
                console.log("newValue: " + newValue + " oldValue: " + oldValue);
//                $scope.counter = $scope.counter + 1;
            }, true);


            $scope.startCounter = function startCounter() {
//                $scope.counter.s1 =  parseInt($scope.counter.s1) +1 +"";
                detailCounterService.restartCounting(onCountInterval);
                $scope.counter.state = detailCounterService.countreeReference.state;
            };

            $scope.suspendCounting = function suspendCounting() {
                detailCounterService.suspendCounting();
                $scope.counter.state = detailCounterService.countreeReference.state;
            };

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
                $scope.safeApply();

            }

            function resizePanelToScaleFactor(scaleFactor) {
                console.log("resizePanelToScaleFactor notified: " + scaleFactor);
                countPanel.css({height:(countPanelInitialHeight * scaleFactor) + 'px'});
            }

        }
    }
});