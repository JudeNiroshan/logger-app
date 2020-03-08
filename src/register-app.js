const Eureka = require('eureka-js-client').Eureka;
const appConfig = require('./config');
const uniqueIdGen = require('node-machine-id');

const uniqueId = uniqueIdGen.machineIdSync() || 123;

const EurekaClient = new Eureka({
  // application instance information

  instance: {
    instanceId: uniqueId,
    app: 'logger-app',
    hostName: appConfig.loggerapp.hostName,
    ipAddr: appConfig.loggerapp.ip,
    port: {
      '$': appConfig.loggerapp.port,
      '@enabled': true,
    },
    vipAddress: 'logger-app.com',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      'name': 'MyOwn',
    },
  },
  eureka: {
    // eureka server host / port
    host: appConfig.eureka.host,
    port: appConfig.eureka.port,
    servicePath: '/eureka/apps/',
  },
});

module.exports = EurekaClient;
