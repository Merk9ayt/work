import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DragTask } from '../../models/drag-task';
import { Task } from '../../models/task';
import { TaskList } from '../../models/task-list';

@Component({
  selector: 'ae-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskBoardComponent<T extends Task> {
  @Input()
  columns: TaskList<T>[] = [];

  private draggingTask?: DragTask<T>;

  getColumnWidth(): string {
    return `calc((100vw - 12.5rem) / ${this.columns.length})`;
  }

  onDrop(event: any, destination: string): void {
    if (this.draggingTask && this.draggingTask.source !== destination) {
      const destinationList = this.columns.find(x => x.id === destination);
      const sourceList = this.columns.find(
        x => x.id === this.draggingTask?.source
      );
      if (!destinationList || !sourceList) {
        throw new Error('Task board is not properly configured.');
      }

      if (
        sourceList.onTaskDragStarted &&
        !sourceList.onTaskDragStarted(this.draggingTask.content)
      ) {
        // failed to drag the task out of the list
        return;
      }

      if (destinationList.onTaskDropStarted) {
        if (destinationList.onTaskDropStarted(this.draggingTask.content)) {
          this.moveTask(sourceList, destinationList, this.draggingTask.content);
        }
      } else {
        this.moveTask(sourceList, destinationList, this.draggingTask.content);
      }

      if (sourceList.onTaskDragCompleted) {
        sourceList.onTaskDragCompleted();
      }

      if (destinationList.onTaskDropCompleted) {
        destinationList.onTaskDropCompleted();
      }
    }
  }

  onDragStarted(draggingTask: DragTask<T>): void {
    this.draggingTask = draggingTask;
  }

  onDragFinished(): void {
    this.draggingTask = undefined;
  }

  private moveTask(
    source: TaskList<T>,
    destination: TaskList<T>,
    task: T
  ): void {
    const taskIndex = source.tasks.findIndex(x => x === task);
    source.tasks = source.tasks.filter((_, index) => index != taskIndex);
    destination.tasks = [...destination.tasks, task];
  }
}
