import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MessageBusModule } from '../message-bus.module';
import { MessageBusService } from './message-bus.service';

describe('MessageBusService', () => {
  let messageBus: MessageBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MessageBusModule],
    });
    messageBus = TestBed.inject(MessageBusService);
  });

  it('should be created', () => {
    expect(messageBus).toBeTruthy();
  });

  it('should subscribe to message by type', done => {
    messageBus.on('test').subscribe(() => {
      done();
    });

    messageBus.emit('test');
  });

  it('should subscribe to message with data', done => {
    const expectedData = 10;
    messageBus.on('test').subscribe(event => {
      expect(event.data).toBe(expectedData);
      done();
    });

    messageBus.emit('test', expectedData);
  });

  it('should notify all subscribers', fakeAsync(() => {
    let eventsReceived = 0;
    messageBus.on('test').subscribe(() => {
      eventsReceived += 1;
    });

    messageBus.on('test').subscribe(() => {
      eventsReceived += 1;
    });

    messageBus.emit('test');

    tick();

    expect(eventsReceived).toBe(2);
  }));

  it('should notify only expected subscribers', fakeAsync(() => {
    let eventsReceived = 0;
    messageBus.on('test-x').subscribe(() => {
      eventsReceived += 1;
    });

    messageBus.on('test-y').subscribe(() => {
      eventsReceived += 1;
    });

    messageBus.emit('test-x');

    tick();

    expect(eventsReceived).toBe(1);
  }));

  it('should notify with different events', fakeAsync(() => {
    let eventXReceived = false;
    let eventYReceived = false;
    messageBus.on('test-x').subscribe(() => {
      eventXReceived = true;
    });

    messageBus.on('test-y').subscribe(() => {
      eventYReceived = true;
    });

    messageBus.emit('test-y');
    messageBus.emit('test-x');

    tick();

    expect(eventXReceived).toBe(true);
    expect(eventYReceived).toBe(true);
  }));

  it('should not notify with previous events', fakeAsync(() => {
    let eventReceived = false;
    messageBus.emit('test');

    messageBus.on('test').subscribe(() => {
      eventReceived = true;
    });

    tick();

    expect(eventReceived).toBe(false);
  }));

  it('should subscribe to events by pattern', fakeAsync(() => {
    let eventReceived = 0;

    messageBus.on('test:*').subscribe(() => {
      eventReceived += 1;
    });

    messageBus.emit('test:success');
    messageBus.emit('test:fail');

    tick();

    expect(eventReceived).toBe(2);
  }));

  it('should subscribe to events by pattern in the middle', fakeAsync(() => {
    let eventReceived = 0;

    messageBus.on('test:*:error').subscribe(() => {
      eventReceived += 1;
    });

    messageBus.emit('test:feature1:error');
    messageBus.emit('test:feature1:success');
    messageBus.emit('test:feature2:error');
    messageBus.emit('test:feature2:success');

    tick();

    expect(eventReceived).toBe(2);
  }));

  it('should subscribe to events by multilevel pattern', fakeAsync(() => {
    let eventReceived = 0;

    messageBus.on('test:**').subscribe(() => {
      eventReceived += 1;
    });

    messageBus.emit('test:feature1:error');
    messageBus.emit('test:feature1:subfeature:error');
    messageBus.emit('test:feature2:error');
    messageBus.emit('test:feature2:success');

    tick();

    expect(eventReceived).toBe(4);
  }));

  it('should subscribe to events by multilevel pattern in the middle', fakeAsync(() => {
    let eventReceived = 0;

    messageBus.on('test:**:error').subscribe(() => {
      eventReceived += 1;
    });

    messageBus.emit('test:feature1:error');
    messageBus.emit('test:feature1:subfeature:error');
    messageBus.emit('test:feature2:error');
    messageBus.emit('test:feature2:success');

    tick();

    expect(eventReceived).toBe(3);
  }));

  it('should subscribe to events by any single character pattern', fakeAsync(() => {
    let eventReceived = 0;

    messageBus.on('test?').subscribe(() => {
      eventReceived += 1;
    });

    messageBus.emit('test1');
    messageBus.emit('test2');
    messageBus.emit('test3');
    messageBus.emit('test12');

    tick();

    expect(eventReceived).toBe(3);
  }));
});
