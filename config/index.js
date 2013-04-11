var config = {};

// add shared config to 'shared' property
config.shared = require('./config.shared');

// determine which config needs to be loaded (reads the NODE_ENV) and add it to the 'env' property
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    console.log('init development config');
    config.env = require('./config.development');
}
else if (process.env.NODE_ENV === 'production') {
    console.log('init production config');
    config.env = require('./config.production');
}

module.exports = config;