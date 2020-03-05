const {mkdir, appendFile} = require('fs').promises;
const fs = require('fs');
const logger = require('./logger').getLogger();
const {LOGS_DIRECTORY} = require('./constants');

const fullPathToLogDirectory = `${process.cwd()}/${LOGS_DIRECTORY}`;

async function writeToLogFile(eventData) {
  if (!fs.existsSync(fullPathToLogDirectory)) {
    await mkdir(fullPathToLogDirectory);
  }

  if (eventData === '') {
    return false;
  } else {
    eventData = formatEventData(eventData) + '\r\n';
  }

  const fileName = getFileName();
  const fullPathToLogFile = `${fullPathToLogDirectory}/${fileName}`;

  try {
    await appendFile(fullPathToLogFile, eventData);
    return true;
  } catch (e) {
    logger.error(e,
        `Failed to write event: ${eventData}\nto a log-file of: ${fileName}`);
  }
  return false;
}

function formatEventData(eventData) {
  const logObj = {
    loggedTimestmap: new Date().toISOString(),
    pid: process.pid,
    platform: process.platform,
    event: eventData,
  };
  return JSON.stringify(logObj);
}

function getFileName() {
  return new Date().toISOString().split('T')[0] + '-events.log';
}


module.exports = writeToLogFile;
