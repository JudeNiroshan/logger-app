const ExportToFile = require('./export-to-file');

class EventManagerFactory {
  static getManager(type) {
    if (type === 'file') {
      return new ExportToFile();
    }

    throw new Error('Unknown event-manager type requested');
  }
}


module.exports = EventManagerFactory;
