const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('src/protos/events.proto');
const eventsProto = grpc.loadPackageDefinition(packageDefinition);
const handleEvent = require('./event/event-handler');
const EurekaClient = require('./register-app');
const appConfig = require('./config');

const grpcServer = new grpc.Server();
grpcServer.addService(eventsProto.EventService.service, {
  logToFile: async (call, callback) => {
    const response = await handleEvent(call.request);
    callback(null, response);
  },
});
grpcServer.bind(`${appConfig.loggerapp.hostName}:${appConfig.loggerapp.port}`,
    grpc.ServerCredentials.createInsecure());

console.log('Server running at ' +
  `${appConfig.loggerapp.ip}:${appConfig.loggerapp.port}`);
grpcServer.start();
EurekaClient.start();
