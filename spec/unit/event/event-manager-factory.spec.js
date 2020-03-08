const expect = require('expect');
const EventManagerFactory = require('../../../src/event/event-manager-factory');
const ExportToFile = require('../../../src/event/export-to-file');

describe('event-manager-factory ', () => {
  it('should throw error when requested manager type is not found', function() {
    try {
      EventManagerFactory.getManager('unkown');
    } catch (e) {
      expect(e.message).toEqual('Unknown event-manager type requested');
    }
  });

  it('should return requested manager when ' +
    'requested manager type is registered', function() {
    const fileManager = EventManagerFactory.getManager('file');
    expect(fileManager).toBeDefined();
    expect(fileManager).toBeInstanceOf(ExportToFile);
  });
});
