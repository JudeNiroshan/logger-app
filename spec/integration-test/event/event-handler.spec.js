const expect = require('expect');
const fs = require('fs');
const path = require('path');
const firstline = require('firstline');
const handleEvent = require('../../../src/event/event-handler');

const directory = 'logs';

describe('Event handler (IT)', () => {
  before(() => {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
  });

  beforeEach(async () => {
    await clearLogsDir();
  });

  afterEach(async () => {
    await clearLogsDir();
  });

  it('should return success when event has logged in the file', async () => {
    const mockEvent = {
      timestamp: 123677632,
      userId: 1234,
      event: 'something',
    };
    const resp = await handleEvent(mockEvent);
    const files = await fs.promises.readdir(directory);
    for (const file of files) {
      const line = await firstline(`${directory}/${file}`);
      expect(line).toContain(mockEvent.event);
    }

    expect(resp).toBeDefined();
    expect(resp.status).toEqual('Success');
  });

  it('should return Error when event is empty', async () => {
    const mockEvent = {};
    const resp = await handleEvent(mockEvent);
    const files = await fs.promises.readdir(directory);
    expect(files.length).toBe(0);

    expect(resp).toBeDefined();
    expect(resp.status).toEqual('Error');
    expect(resp.reason).toBeDefined();
    expect(resp.reason).toEqual('Empty event');
  });

  async function clearLogsDir() {
    const files = await fs.promises.readdir(directory);
    for (const file of files) {
      await fs.promises.unlink(path.join(directory, file));
    }
  }
});

