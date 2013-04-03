var mainApp = angular.module('mainApp', [
    'counterComponent',
    'notificationBarComponent',
    'quickCounterSettingsPopupComponent'
]);

mainApp.run(function(){});


// configure app services
addCountAreaResizeService(mainApp);
addDetailCounterService(mainApp);

