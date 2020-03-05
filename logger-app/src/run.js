const grpc = require('grpc');
const writeToLogFile = require('./utils/fs-utils');
const eventsProto = grpc.load('src/protos/events.proto');

const server = new grpc.Server();

server.addService(eventsProto.EventService.service, {
  logToFile: async (call, callback) => {
    const event = call.request;
    console.log('passed event::' + JSON.stringify(event));
    const logged = await writeToLogFile(JSON.stringify(event));
    if (logged) {
      callback(null, {status: 'Good!'});
    } else {
      callback(null, {status: 'Bad!'});
    }
  },
});
server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
console.log('Server running at http://127.0.0.1:50051');
server.start();
