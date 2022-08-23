const config = require('./jest.config');
config.testMatch = ['**/?(*.unit.)+(spec|test).[jt]s?(x)'];
module.exports = config;
