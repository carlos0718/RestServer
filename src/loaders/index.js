const ExpressServer = require('./server/expressServer');
const config = require('../config');

module.exports = async () => {

    const server = new ExpressServer();
    console.log('Expressn Loaded');

    server.start();
    console.log('#######################################');
    console.log(`Server listning on port: ${config.port}`);
    console.log('#######################################');
}