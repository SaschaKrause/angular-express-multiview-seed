/**
 * Add a service that handles the resizing of the count area by calling each bound callback when the area gets resized.
 * @param app the app this service should be bound to
 */
function addCountAreaResizeService(app) {
    app.factory('countAreaResizeService', function () {
        var service = {};
        var callbacks = [];

        service.listenToResize = function listenToResize(callback) {
            callbacks.push(callback);
        };

        service.fireResizeEvent = function fireResizeEvent(scaleFactor) {
            callbacks.map(function (callback) {
                callback(scaleFactor);
            });
        };

        return service;
    });
}