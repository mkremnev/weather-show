export class Observer {
  constructor() {
    this.observer = [];
  }

  subscribe(fn) {
    this.observer.push(fn);
  }

  unsubscribe(fn) {
    this.observer = this.observer.filter((subscriber) => subscriber !== fn);
  }

  notify(data) {
    this.observer.forEach((subscriber) => subscriber(data));
  }
}
