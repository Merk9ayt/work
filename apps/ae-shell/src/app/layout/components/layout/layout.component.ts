import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AeBaseComponent } from '@ae-labs/ui';
import { LayoutState } from '../../store';

@Component({
  selector: 'ae-shell-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent extends AeBaseComponent {
  compactView$: Observable<boolean> = this.store.select(
    LayoutState.compactMenu
  );

  constructor(private readonly store: Store) {
    super();
  }
}
