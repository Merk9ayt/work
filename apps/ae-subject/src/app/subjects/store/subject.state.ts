import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { SubjectModel } from '../models/subject.model';
import { SubjectDatasourceService } from '../services/subject-datasource.service';
import {
  CreateSubject,
  DeleteSubject,
  LoadSubject,
  LoadSubjects,
  UpdateSubject,
} from './subject-state.actions';
import { SubjectStateModel } from './subject-state.model';

@State<SubjectStateModel>({
  name: 'subject',
  defaults: {
    SubjectList: [],
    SelectedSubject: {
      id: '',
      typeId: '',
      name: '',
      description: '',
    },
    SelectedId: '',
    TypeId: '',
  },
})
@Injectable()
export class SubjectState {
  constructor(private readonly dataSourceService: SubjectDatasourceService) {}

  @Selector()
  static SubjectsList(state: SubjectStateModel): SubjectModel[] {
    return state.SubjectList;
  }

  @Selector()
  static selectedSubject(state: SubjectStateModel): SubjectModel | undefined {
    return state.SelectedSubject;
  }

  @Selector()
  static selectedId(state: SubjectStateModel): string | undefined {
    return state.SelectedId;
  }

  @Selector()
  static typeId(state: SubjectStateModel): string {
    return state.TypeId;
  }

  @Action(LoadSubjects)
  loadStudyTemplates(
    ctx: StateContext<SubjectStateModel>,
    action: LoadSubjects
  ): void {
    this.dataSourceService.getSubjects(action.typeId).subscribe(subjects => {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        SubjectList: subjects.entries ?? [],
        TypeId: action.typeId,
      });
    });
  }

  @Action(LoadSubject)
  loadStudyTemplate(
    ctx: StateContext<SubjectStateModel>,
    action: LoadSubject
  ): void {
    this.dataSourceService.getSubject(action.id).subscribe(subject => {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        SelectedSubject: subject,
        SelectedId: subject.id,
        TypeId: subject.typeId,
      });
    });
  }

  @Action(UpdateSubject)
  updateStudyTemplate(
    ctx: StateContext<SubjectStateModel>,
    action: UpdateSubject
  ): Observable<void> {
    return this.dataSourceService.updateSubject(action.id, action.patch).pipe(
      map(() => {
        ctx.dispatch(new LoadSubjects(action.typeId));
      })
    );
  }

  @Action(CreateSubject)
  createStudyTemplate(
    ctx: StateContext<SubjectStateModel>,
    action: CreateSubject
  ): Observable<void> {
    return this.dataSourceService.createSubject(action.payload).pipe(
      map(result => {
        const state = ctx.getState();
        ctx.dispatch(new LoadSubjects(action.payload.typeId));
        ctx.setState({
          ...state,
          SelectedId: result,
        });
      })
    );
  }

  @Action(DeleteSubject)
  deleteSubject(
    ctx: StateContext<SubjectStateModel>,
    action: DeleteSubject
  ): Observable<void> {
    return this.dataSourceService.deleteSubject(action.id).pipe(
      map(() => {
        const state = ctx.getState();
        ctx.dispatch(new LoadSubjects(action.typeId));
        ctx.setState({
          ...state,
          SelectedSubject: undefined,
          SelectedId: undefined,
        });
      })
    );
  }
}
