import { EventEmitter } from '@angular/core';

export class ViewModelBase {
  get updated(): boolean {
    return this._updated;
  }

  set updated(value: boolean) {
    this._updated = value;
    this.onUpdated.emit();
  }

  onUpdated = new EventEmitter();
  private _updated = false;

  get isValid(): boolean {
    return true;
  }
}
