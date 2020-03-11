const config = {};

config.loggerapp = {
  hostName: 'localhost',
  ip: '127.0.0.1',
  port: 50051,
  httpPort: 3001,
};
config.persist = {
  type: 'file',
};

config.eureka = {
  host: 'localhost',
  port: 8761,
};

module.exports = config;
