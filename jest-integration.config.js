const config = require('./jest.config');
config.testMatch = ['**/?(*.integration.)+(spec|test).[jt]s?(x)'];
module.exports = config;
