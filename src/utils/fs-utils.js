const {mkdir, appendFile} = require('fs').promises;
const fs = require('fs');
const logger = require('./logger').getLogger();
const {LOGS_DIRECTORY} = require('./constants');
const decorateEventData = require('../event/event-wrapper');
const fullPathToLogDirectory = `${process.cwd()}/${LOGS_DIRECTORY}`;

async function writeToLogFile(eventData) {
  if (!fs.existsSync(fullPathToLogDirectory)) {
    await mkdir(fullPathToLogDirectory);
  }
  const fileName = getFileName();
  const fullPathToLogFile = `${fullPathToLogDirectory}/${fileName}`;
  eventData = decorateEventData(eventData) + '\r\n';
  try {
    await appendFile(fullPathToLogFile, eventData);
    return true;
  } catch (e) {
    logger.error(e,
        `Failed to write event: ${eventData}\nto the log-file: ${fileName}`);
  }
  return false;
}

function getFileName() {
  return new Date().toISOString().split('T')[0] + '_events.log';
}


module.exports = writeToLogFile;
