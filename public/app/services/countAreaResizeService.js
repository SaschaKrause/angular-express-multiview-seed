/**
 * Add a service that handles the count area resizing by calling each  provided callback when the area gets resized.
 * @param app the app this service should be bound to
 */
function addCountAreaResizeService(app) {
    app.factory('countAreaResizeService', function () {
        var service = {};
        var callbacks = [];

        service.notifyOnResize = function notifyOnResize(callback) {
            callbacks.push(callback);
        };

        service.areaResized = function areaResized(scaleFactor) {
            callbacks.map(function (callback) {
                callback(scaleFactor);
            });
        };

        return service;

    });
}