const config = {};

config.loggerapp = {
  hostName: 'localhost',
  ip: '127.0.0.1',
  port: 50051,
};
config.persist = {
  type: 'file',
};

config.eureka = {
  host: 'localhost',
  port: 8761,
};

module.exports = config;
