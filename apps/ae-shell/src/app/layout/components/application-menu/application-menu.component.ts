import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ae-menu',
  templateUrl: './application-menu.component.html',
  styleUrls: ['./application-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationMenuComponent {
  @Input()
  model?: MenuItem[];

  parentActive = true;
}
