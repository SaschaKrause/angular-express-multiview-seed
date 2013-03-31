var notificationBarComponent = angular.module('notificationBarComponent', []);

notificationBarComponent.directive('notificationBar', function createDirective(detailCounterService){
return {
    restrict: 'E',
    templateUrl: 'app/components/notification-bar/notificationBarTpl.html',
    link: function linkFn(scope, element, attrs) {
        scope.asdf = "no notifications";

        detailCounterService.notifyAt({event: 'onStart'}, function(){
            scope.asdf = "counter started";
        });

        detailCounterService.notifyAt({seconds: 5, when: 'afterStart'}, function(){
            scope.asdf = "5 seconds after start";
        });

        detailCounterService.notifyAt({event: 'onSuspend'}, function(){
            scope.asdf = "counter suspended";
        });

        detailCounterService.notifyAt({event: 'onResume'}, function(){
            scope.asdf = "counter resumed";
        });

    }
}
});