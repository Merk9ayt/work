import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ae-sub-menu',
  templateUrl: './application-sub-menu.component.html',
  styleUrls: ['./application-sub-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('children', [
      state(
        'hidden',
        style({
          height: '0px',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      transition(
        'visible => hidden',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hidden => visible',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class ApplicationSubMenuComponent {
  @Input() items?: MenuItem[];

  @Input()
  root = false;

  @Input() get parentActive(): boolean {
    return this._parentActive;
  }

  set parentActive(value) {
    if (!this.root) {
      this._parentActive = value;

      if (!value) {
        this.activeItem = undefined;
      }
    }
  }

  activeItem?: MenuItem;

  private _parentActive = false;

  onItemClick(event: Event, item: MenuItem): void {
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }

    if (item.command) {
      item.command({
        originalEvent: event,
        item: item,
      });
    }

    if (item.items) {
      if (this.activeItem && item === this.activeItem) {
        this.activeItem = undefined;
      } else {
        this.activeItem = item;
      }
    }
  }
}
