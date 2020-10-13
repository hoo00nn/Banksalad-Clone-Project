class PubSub {
  constructor(state) {
    this.events = {};
    this.state = state;
  }

  subscribe(event, fn) {
    this.events[event] = this.events[event] || [];
    this.events[event].push = fn;
  }

  unsubscribe(event, fn) {
    this.events[event] = this.events[event].filter((f) => f !== fn);
  }

  publish(event, data) {
    if (!this.events.hasOwnProperty(event)) return [];
    return self.events[event].map((fn) => fn(data));
  }

  setState(action) {
    const { type, payload } = action;
    this.state = Object.assign({}, this.state, payload);
    this.publish(type, payload);
  }
}

export default PubSub;
