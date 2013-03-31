var mainApp = angular.module('mainApp', [
    'counterComponent'
]);

mainApp.run(function(){});


// configure app services
addCountAreaResizeService(mainApp);
addDetailCounterService(mainApp);

