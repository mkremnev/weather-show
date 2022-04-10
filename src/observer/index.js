export class Observer {
  constructor() {
    this.observer = [];
  }

  subscribe(fn, name) {
    this.observer.push({ [name]: fn });
  }

  unsubscribe(name, fn) {
    this.observer = this.observer.filter(
      (subscriber) => subscriber[name] !== fn
    );
  }

  notify(data, name) {
    const notificator = this.observer.filter((subscriber) =>
      Object.keys(subscriber).includes(name)
    );

    notificator.forEach((subscriber) => subscriber[name](data));
  }
}
