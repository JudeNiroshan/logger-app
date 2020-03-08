const expect = require('expect');
const os = require('os');
const packageJson = require('../../../package');
const decorateEventData = require('../../../src/event/event-wrapper');

describe('event-wrapper ', () => {
  it('should decorate event object with informative data', function() {
    const mockEvent = {
      timestamp: 123456,
      userId: 123,
      event: 'something',
    };
    const resp = decorateEventData(mockEvent);

    expect(resp).toContain(JSON.stringify(mockEvent));
    expect(resp).toContain(
        `\"name\":\"${packageJson.name}-${packageJson.version}\"`);
    expect(resp).toContain(`\"hostname\":\"${os.hostname()}\"`);
    expect(resp).toContain(`\"pid\":${process.pid}`);
    expect(resp).toContain(`\"platform\":\"${process.platform}\"`);
  });
});
