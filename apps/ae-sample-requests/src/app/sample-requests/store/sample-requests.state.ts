import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { zip } from 'rxjs';
import { SampleRequest } from '../models/sample-request';
import { SampleRequestStatus } from '../models/sample-request-status.enum';
import { SampleRequestDataSourceService } from '../services/sample-request-data-source.service';
import { LoadRequestForToday } from './sample-requests-state.actions';
import { SampleRequestsStateModel } from './sample-requests-state.model';

@State<SampleRequestsStateModel>({
  name: 'sample_requests',
  defaults: {
    todo: [],
    inProgress: [],
    completed: [],
  },
})
@Injectable()
export class SampleRequestsState {
  constructor(
    private readonly dataSourceService: SampleRequestDataSourceService
  ) {}

  @Selector()
  static todo(state: SampleRequestsStateModel): SampleRequest[] {
    return state.todo;
  }

  @Selector()
  static inProgress(state: SampleRequestsStateModel): SampleRequest[] {
    return state.inProgress;
  }

  @Selector()
  static completed(state: SampleRequestsStateModel): SampleRequest[] {
    return state.completed;
  }

  @Action(LoadRequestForToday)
  loadRequestsForToday(ctx: StateContext<SampleRequestsStateModel>): void {
    zip(
      this.dataSourceService.getSampleRequests(SampleRequestStatus.Requested),
      this.dataSourceService.getSampleRequests(SampleRequestStatus.InProgress),
      this.dataSourceService.getSampleRequests(SampleRequestStatus.Received)
    ).subscribe(([todo, inProgress, completed]) => {
      ctx.setState({
        todo,
        inProgress,
        completed,
      });
    });
  }
}
