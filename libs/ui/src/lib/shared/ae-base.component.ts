import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'ae-ui-base',
  template: '',
})
export abstract class AeBaseComponent implements OnDestroy {
  destroyed$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
