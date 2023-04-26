import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TaskComponent } from './components/task/task.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [TaskBoardComponent, TaskListComponent, TaskComponent],
  exports: [TaskBoardComponent],
  imports: [
    CommonModule,
    ScrollPanelModule,
    PanelModule,
    ScrollerModule,
    CardModule,
    DragDropModule,
  ],
})
export class TaskBoardModule {}
