class PubSub {
  constructor(state) {
    this.events = {};
    this.state = state;
  }

  subscribe(event, fn) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(fn);
  }

  unsubscribe(event, fn) {
    this.events[event] = this.events[event].filter((f) => f !== fn);
  }

  publish(event) {
    if (!this.events.hasOwnProperty(event)) return [];
    return this.events[event].map((fn) => fn());
  }
}

export default PubSub;
