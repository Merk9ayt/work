import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { DragTask } from '../../models/drag-task';
import { Task } from '../../models/task';
import { TaskList } from '../../models/task-list';

@Component({
  selector: 'ae-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent<T extends Task> {
  @Input()
  model?: TaskList<T>;

  @Output()
  dragStarted: EventEmitter<DragTask<T>> = new EventEmitter<DragTask<T>>();

  @Output()
  dragFinished: EventEmitter<never> = new EventEmitter<never>();

  private draggedTask?: DragTask<T>;

  onDragStart(source: string, task: T): void {
    this.draggedTask = {
      source,
      content: task,
    };
    this.dragStarted.emit(this.draggedTask);
  }

  onDragEnd(): void {
    this.draggedTask = undefined;
    this.dragFinished.emit();
  }
}
