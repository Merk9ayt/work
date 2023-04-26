import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, takeUntil } from 'rxjs';
import { AeBaseComponent, TaskList } from '@ae-labs/ui';
import { SampleRequest } from '../../models/sample-request';
import { SampleRequestTask } from '../../models/sample-request-task';
import { LoadRequestForToday } from '../../store/sample-requests-state.actions';
import { SampleRequestsState } from '../../store/sample-requests.state';

@Component({
  selector: 'ae-sample-requests',
  templateUrl: './sample-requests.component.html',
  styleUrls: ['./sample-requests.component.scss'],
})
export class SampleRequestsComponent extends AeBaseComponent implements OnInit {
  taskBoard: TaskList<SampleRequestTask>[] = [
    {
      id: 'todo',
      title: 'Планируемые',
      tasks: [],
    },
    {
      id: 'inProgress',
      title: 'В работе',
      tasks: [],
    },
    {
      id: 'completed',
      title: 'Завершены',
      tasks: [],
    },
  ];

  constructor(private readonly store: Store) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadRequestForToday());

    this.store
      .select(SampleRequestsState.todo)
      .pipe(
        map(result => result.map(x => this.mapSampleRequestToTasks(x))),
        takeUntil(this.destroyed$)
      )
      .subscribe(todos => {
        this.taskBoard[0].tasks = todos;
      });

    this.store
      .select(SampleRequestsState.inProgress)
      .pipe(
        map(result => result.map(x => this.mapSampleRequestToTasks(x))),
        takeUntil(this.destroyed$)
      )
      .subscribe(inProgress => {
        this.taskBoard[1].tasks = inProgress;
      });

    this.store
      .select(SampleRequestsState.completed)
      .pipe(
        map(result => result.map(x => this.mapSampleRequestToTasks(x))),
        takeUntil(this.destroyed$)
      )
      .subscribe(completed => {
        this.taskBoard[2].tasks = completed;
      });
  }

  private mapSampleRequestToTasks(
    sampleRequest: SampleRequest
  ): SampleRequestTask {
    return {
      id: sampleRequest.source.name,
      description: `${sampleRequest.source.name} ${sampleRequest.plannedDate}`,
      request: sampleRequest,
    };
  }
}
