const grpc = require('grpc');
const eventsProto = grpc.load('src/protos/events.proto');
const handleEvent = require('./event/event-handler');
const EurekaClient = require('./register-app');
const appConfig = require('./config');

const server = new grpc.Server();

server.addService(eventsProto.EventService.service, {
  logToFile: async (call, callback) => {
    const response = await handleEvent(call.request);
    callback(null, response);
  },
});
server.bind(`${appConfig.loggerapp.hostName}:${appConfig.loggerapp.port}`,
    grpc.ServerCredentials.createInsecure());
EurekaClient.start();
console.log('Server running at ' +
`${appConfig.loggerapp.ip}:${appConfig.loggerapp.port}`);
server.start();
