var mainApp = angular.module('mainApp', [
    'counterComponent',
    'notificationBarComponent'
]);

mainApp.run(function(){});


// configure app services
addCountAreaResizeService(mainApp);
addDetailCounterService(mainApp);

