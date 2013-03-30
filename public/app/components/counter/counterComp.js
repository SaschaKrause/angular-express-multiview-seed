var counterModule = angular.module('counterComponent', []);

counterModule.directive('counter', function createDirective(countAreaResizeService) {
    return {
        restrict: 'E',
        templateUrl: 'app/components/counter/counterTpl.html',
        scope: {format: '@format'},
        link: function linking(scope, element, attrs) {

            scope.counter = {
              h1: '2',
              h2: '3',
              m1: '9',
              m2: '5',
              s1: '-',
              s2: '-'
            };
            console.log(attrs.format);

            countAreaResizeService.notifyOnResize(function(scaleFactor) {
               console.log("compo notified: " + scaleFactor);
            });

            scope.change = function change() {
                var arr = this.counter.input.split(':');

                this.counter.h1 = arr[0][0];
                this.counter.h2 = arr[0][1];
                this.counter.m1 = arr[1][0];
                this.counter.m2 = arr[1][1];
                this.counter.s1 = arr[2][0];
                this.counter.s2 = arr[2][1];
            };

            scope.$on('asdf', function(){
                console.log("aus component");
            });

        }
    }
});