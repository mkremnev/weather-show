import { Observer } from '@/observer/index';

describe('Testing observer', () => {
  it('should subscribe function is called', () => {
    const observer = new Observer();
    let subscriberHasBeenCalled = false;

    // eslint-disable-next-line no-return-assign
    const fn = (data) => (subscriberHasBeenCalled = data);

    observer.subscribe(fn, 'subscribe');

    observer.notify(true, 'subscribe');

    expect(subscriberHasBeenCalled).toBeTruthy();
  });

  it('should subscribe function is called', () => {
    const observer = new Observer();
    const fn = () => {};

    observer.subscribe(fn, 'subscribe');

    observer.unsubscribe(fn);

    expect(observer.observer.length).toBe(0);
  });
});
