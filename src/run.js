const grpc = require('grpc');
const eventsProto = grpc.load('src/protos/events.proto');
const handleEvent = require('./event/event-handler');

const server = new grpc.Server();

server.addService(eventsProto.EventService.service, {
  logToFile: async (call, callback) => {
    const response = await handleEvent(call.request);
    callback(null, response);
  },
});
server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
console.log('Server running at http://127.0.0.1:50051');
server.start();
