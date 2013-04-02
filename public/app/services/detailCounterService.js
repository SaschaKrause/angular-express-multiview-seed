function addDetailCounterService(app) {

    app.factory('detailCounterService', function() {
        var counter = {};

        var counterOption = {
            direction: 'down',
            minutes: 23,
            seconds: 40,
            hours: 1,
            days: 0,
            updateIntervalInMilliseconds: 1000,
            name: 'my first counter'
        };

        var countree = new Countree(counterOption);

        counter.restartCounting = function(callback) {
            countree.start(callback);
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