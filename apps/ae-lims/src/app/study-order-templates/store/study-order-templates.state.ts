import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { DocumentStatus } from '@ae-labs/core';
import { StudyOrderTemplateBaseModel } from '../models/study-order-template-base.model';
import { StudyOrderTemplateModel } from '../models/study-order-template.model';
import { StudyOrderTemplatesDatasourceService } from '../services/study-order-templates-datasource.service';
import { StudyOrderTemplatesStateModel } from './study-order-templates-state.model';
import {
  ArchiveStudyOrderTemplate,
  CreateStudyOrderTemplate,
  LoadStudyOrderTemplate,
  LoadStudyOrderTemplates,
  UpdateStudyOrderTemplate,
} from './studyorder--templates-state.actions';

@State<StudyOrderTemplatesStateModel>({
  name: 'study_order_templates',
  defaults: {
    TemplateList: [],
    SelectedTemplate: {
      id: '',
      code: '',
      name: '',
      description: '',
      revision: '',
      studies: [],
      status: DocumentStatus.Outdated,
    },
    SelectedId: '',
  },
})
@Injectable()
export class StudyOrderTemplatesState {
  constructor(
    private readonly dataSourceService: StudyOrderTemplatesDatasourceService
  ) {}

  @Selector()
  static studyOrderTemplatesList(
    state: StudyOrderTemplatesStateModel
  ): StudyOrderTemplateBaseModel[] {
    return state.TemplateList;
  }

  @Selector()
  static selectedStudyOrderTemplate(
    state: StudyOrderTemplatesStateModel
  ): StudyOrderTemplateModel | undefined {
    return state.SelectedTemplate;
  }

  @Selector()
  static selectedId(state: StudyOrderTemplatesStateModel): string | undefined {
    return state.SelectedId;
  }

  @Action(LoadStudyOrderTemplates)
  loadStudyOrderTemplates(
    ctx: StateContext<StudyOrderTemplatesStateModel>
  ): void {
    this.dataSourceService
      .getStudyOrderTemplates()
      .subscribe(studyOrderTemplates => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          TemplateList: studyOrderTemplates.entries ?? [],
        });
      });
  }

  @Action(LoadStudyOrderTemplate)
  loadStudyTemplate(
    ctx: StateContext<StudyOrderTemplatesStateModel>,
    action: LoadStudyOrderTemplate
  ): void {
    if (action.id == 'new') {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        SelectedTemplate: {
          id: 'new',
          name: '',
          studies: [],
          status: DocumentStatus.Draft,
        },
        SelectedId: undefined,
      });
    } else {
      this.dataSourceService
        .getStudyOrderTemplate(action.id)
        .subscribe(studyOrderTemplate => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            SelectedTemplate: studyOrderTemplate,
            SelectedId: studyOrderTemplate.id,
          });
        });
    }
  }

  @Action(UpdateStudyOrderTemplate)
  updateStudyTemplate(
    ctx: StateContext<StudyOrderTemplatesStateModel>,
    action: UpdateStudyOrderTemplate
  ): Observable<void> {
    return this.dataSourceService
      .updateStudyOrderTemplate(action.id, action.patch)
      .pipe(
        map(() => {
          ctx.dispatch(new LoadStudyOrderTemplates());
        })
      );
  }

  @Action(CreateStudyOrderTemplate)
  createStudyTemplate(
    ctx: StateContext<StudyOrderTemplatesStateModel>,
    action: CreateStudyOrderTemplate
  ): Observable<void> {
    return this.dataSourceService.createStudyOrderTemplate(action.payload).pipe(
      map(result => {
        const state = ctx.getState();
        ctx.dispatch(new LoadStudyOrderTemplates());
        ctx.setState({
          ...state,
          SelectedId: result.id,
        });
      })
    );
  }

  @Action(ArchiveStudyOrderTemplate)
  archiveStudyTemplate(
    ctx: StateContext<StudyOrderTemplatesStateModel>,
    action: ArchiveStudyOrderTemplate
  ): Observable<void> {
    return this.dataSourceService.archiveStudyOrderTemplate(action.id).pipe(
      map(() => {
        const state = ctx.getState();
        ctx.dispatch(new LoadStudyOrderTemplates());
        ctx.setState({
          ...state,
          SelectedTemplate: undefined,
          SelectedId: undefined,
        });
      })
    );
  }
}
