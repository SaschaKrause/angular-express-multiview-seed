var counterModule = angular.module('counterComponent', []);

counterModule.directive('counter', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/counter/counterTemplate.html'
    }
});