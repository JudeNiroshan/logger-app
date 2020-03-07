const BaseEventManager = require('./base-event-manager');
const writeToLogFile = require('../utils/fs-utils');

class ExportToFile extends BaseEventManager {
  async _process(wrappedEvent) {
    return await writeToLogFile(wrappedEvent);
  }
}

module.exports = ExportToFile;
