const grpc = require('grpc')
const PROTO_PATH_EVENTS = 'src/protos/events.proto'
const EventService = grpc.load(PROTO_PATH_EVENTS).EventService

const client = new EventService('localhost:50051',
    grpc.credentials.createInsecure())
module.exports = client