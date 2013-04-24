function addDetailCounterService(app) {

    app.factory('detailCounterService', function() {
        var counter = {};

        var counterOption = {
            customTime: {
                stopAt: {
                    minutes: 23,
                    seconds: 40,
                    hours: 10,
                    days: 7
                }
            },
            updateIntervalInMilliseconds: 33,
            name: 'my first counter'
        };

        var countree = new Countree(counterOption);

        counter.setIntervalCallback = function setIntervalCallback(callback) {
            countree.setIntervalCallback(callback);
        };

        counter.restartCounting = function() {
            countree.start();
        };

        counter.suspendCounting = function() {
            countree.suspend();
        };

        counter.resumeCounting = function() {
            countree.resume();
        };

        counter.notifyAt = function(config, callback) {
            countree.notifyAt(config, callback);
        };

        counter.countreeReference = countree;
        return counter;
    });
}