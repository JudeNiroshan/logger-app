const _ = require('lodash');
const logger = require('../utils/logger').getLogger();
const writeToLogFile = require('../utils/fs-utils');

async function handleEvent(event) {
  if (_.isEmpty(event)) {
    return _unsuccessfulResponse({message: 'Empty event'});
  }
  logger.info(`received event:: ${JSON.stringify(event)}`);
  try {
    const logged = await writeToLogFile(event);
    if (logged) {
      return _successfulResponse();
    }
    throw new Error(`Unknown exception for ${event}`);
  } catch (error) {
    return _unsuccessfulResponse(error);
  }
}

function _successfulResponse() {
  return {
    status: 'Success',
  };
}

function _unsuccessfulResponse(error) {
  const basicResponse = {
    status: 'Error',
  };

  if (!_.isEmpty(error)) {
    basicResponse['reason'] = error.message;
  }
  return basicResponse;
}

module.exports = handleEvent;
