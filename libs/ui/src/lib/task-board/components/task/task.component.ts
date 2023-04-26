import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AeBaseComponent } from '../../../shared';
import { Task } from '../../models/task';

@Component({
  selector: 'ae-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent<T extends Task> extends AeBaseComponent {
  @Input()
  model?: T;
}
