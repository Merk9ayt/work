import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { SampleSourceStatusEnum } from '../models/sample-source-status.enum';
import { SampleSourceModel } from '../models/sample-source.model';
import { SampleSourcesDatasourceService } from '../services/sample-sources-datasource.service';
import {
  CreateSampleSource,
  LoadSampleSource,
  LoadSampleSources,
} from './sample-sources-state.actions';
import { SampleSourcesStateModel } from './sample-sources-state.model';

@State<SampleSourcesStateModel>({
  name: 'sample_sources',
  defaults: {
    SampleSourcesList: [],
    SelectedSampleSource: {
      id: '',
      name: '',
      description: '',
      specimens: [],
      status: SampleSourceStatusEnum.Deactivated,
    },
  },
})
@Injectable()
export class SampleSourcesState {
  constructor(
    private readonly dataSourceService: SampleSourcesDatasourceService
  ) {}

  @Selector()
  static sampleSourcesList(
    state: SampleSourcesStateModel
  ): SampleSourceModel[] {
    return state.SampleSourcesList;
  }

  @Selector()
  static selectedSampleSource(
    state: SampleSourcesStateModel
  ): SampleSourceModel | undefined {
    return state.SelectedSampleSource;
  }

  @Selector()
  static selectedId(state: SampleSourcesStateModel): string | undefined {
    return state.SelectedId;
  }

  @Action(LoadSampleSources)
  loadStudyTemplates(ctx: StateContext<SampleSourcesStateModel>): void {
    this.dataSourceService.getSampleSources().subscribe(sampleSource => {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        SampleSourcesList: sampleSource.entries ?? [],
      });
    });
  }

  @Action(LoadSampleSource)
  loadStudyTemplate(
    ctx: StateContext<SampleSourcesStateModel>,
    action: LoadSampleSource
  ): void {
    this.dataSourceService
      .getSampleSource(action.id)
      .subscribe(sampleSource => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          SelectedSampleSource: sampleSource,
        });
      });
  }

  @Action(CreateSampleSource)
  createStudyTemplate(
    ctx: StateContext<SampleSourcesStateModel>,
    action: CreateSampleSource
  ): Observable<void> {
    return this.dataSourceService.createSampleSource(action.payload).pipe(
      map(result => {
        const state = ctx.getState();
        ctx.dispatch(new LoadSampleSources());
        ctx.setState({
          ...state,
        });
      })
    );
  }
}
