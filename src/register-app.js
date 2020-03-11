const Eureka = require('eureka-js-client').Eureka;
const appConfig = require('./config');
const uuid = require('uuid');
const healthEndpoint = require('http');
const healthReponse = require('./resources/health');

const uniqueId = uuid.v4() || 123;


healthEndpoint.createServer(function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(healthReponse));
  res.end();
}).listen(appConfig.loggerapp.httpPort, function() {
  console.log(`server health endpoint port: ${appConfig.loggerapp.httpPort}`);
});

const EurekaClient = new Eureka({
  instance: {
    instanceId: uniqueId,
    app: 'logger-app',
    hostName: appConfig.loggerapp.hostName,
    ipAddr: appConfig.loggerapp.ip,
    port: {
      '$': appConfig.loggerapp.port,
      '@enabled': true,
    },
    healthCheckUrl: `http://${appConfig.loggerapp.hostName}:${appConfig.loggerapp.httpPort}`,
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
