import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AeBaseComponent } from '@ae-labs/ui';
import { LayoutState } from '../../store';

@Component({
  selector: 'ae-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHeaderComponent extends AeBaseComponent {
  compactMenu$: Observable<boolean> = this.store.select(
    LayoutState.compactMenu
  );

  constructor(private readonly store: Store) {
    super();
  }
}
