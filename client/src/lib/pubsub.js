class PubSub {
  constructor() {
    this.events = {};
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
}

export default PubSub;
