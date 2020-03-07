const decorateEventData = require('./event-wrapper');

class BaseEventManager {
  _wrapEvent(event) {
    return decorateEventData(event);
  }

  async processEvent(event) {
    const wrappedEvent = this._wrapEvent(event);
    return this._process(wrappedEvent);
  }

  async _process(wrappedEvent) {
    throw new Error('BaseEventManager process method must be overridden');
  }
}


module.exports = BaseEventManager;
