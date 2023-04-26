import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { DocumentStatus } from '@ae-labs/core';
import { StudyTemplateBaseModel } from '../models/study-template-base.model';
import { StudyTemplateModel } from '../models/study-template.model';
import { StudyTemplatesDatasourceService } from '../services/study-templates-datasource.service';
import {
  ArchiveStudyTemplate,
  CreateStudyTemplate,
  LoadStudyTemplate,
  LoadStudyTemplates,
  UpdateStudyTemplate,
} from './study-templates-state.actions';
import { StudyTemplatesStateModel } from './study-templates-state.model';

@State<StudyTemplatesStateModel>({
  name: 'study_templates',
  defaults: {
    TemplateList: [],
    SelectedTemplate: {
      id: '',
      code: '',
      name: '',
      officialName: '',
      description: '',
      parameters: [],
      samples: [],
      results: [],
      revision: '',
      status: DocumentStatus.Outdated,
    },
    SelectedId: '',
  },
})
@Injectable()
export class StudyTemplatesState {
  constructor(
    private readonly dataSourceService: StudyTemplatesDatasourceService
  ) {}

  @Selector()
  static studyTemplatesList(
    state: StudyTemplatesStateModel
  ): StudyTemplateBaseModel[] {
    return state.TemplateList;
  }

  @Selector()
  static selectedStudyTemplate(
    state: StudyTemplatesStateModel
  ): StudyTemplateModel | undefined {
    return state.SelectedTemplate;
  }

  @Selector()
  static selectedId(state: StudyTemplatesStateModel): string | undefined {
    return state.SelectedId;
  }

  //
  // @Selector()
  // static selectedVersion(state: StudyTemplatesStateModel): string | undefined {
  //   return state.SelectedVersion;
  // }

  @Action(LoadStudyTemplates)
  loadStudyTemplates(ctx: StateContext<StudyTemplatesStateModel>): void {
    this.dataSourceService.getStudyTemplates().subscribe(studyTemplates => {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        TemplateList: studyTemplates.entries ?? [],
      });
    });
  }

  @Action(LoadStudyTemplate)
  loadStudyTemplate(
    ctx: StateContext<StudyTemplatesStateModel>,
    action: LoadStudyTemplate
  ): void {
    if (action.id == 'new') {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        SelectedTemplate: {
          id: 'new',
          name: '',
          parameters: [],
          samples: [],
          results: [],
          status: DocumentStatus.Draft,
        },
        SelectedId: undefined,
      });
    } else {
      this.dataSourceService
        .getStudyTemplate(action.id)
        .subscribe(studyTemplate => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            SelectedTemplate: studyTemplate,
            SelectedId: studyTemplate.id,
          });
        });
    }
  }

  @Action(UpdateStudyTemplate)
  updateStudyTemplate(
    ctx: StateContext<StudyTemplatesStateModel>,
    action: UpdateStudyTemplate
  ): Observable<void> {
    return this.dataSourceService
      .updateStudyTemplate(action.id, action.patch)
      .pipe(
        map(() => {
          ctx.dispatch(new LoadStudyTemplates());
        })
      );
  }

  @Action(CreateStudyTemplate)
  createStudyTemplate(
    ctx: StateContext<StudyTemplatesStateModel>,
    action: CreateStudyTemplate
  ): Observable<void> {
    return this.dataSourceService.createStudyTemplate(action.payload).pipe(
      map(result => {
        const state = ctx.getState();
        ctx.dispatch(new LoadStudyTemplates());
        ctx.setState({
          ...state,
          SelectedId: result.id,
          // SelectedVersion: result.version,
        });
      })
    );
  }

  @Action(ArchiveStudyTemplate)
  archiveStudyTemplate(
    ctx: StateContext<StudyTemplatesStateModel>,
    action: ArchiveStudyTemplate
  ): Observable<void> {
    return this.dataSourceService.archiveStudyTemplate(action.id).pipe(
      map(() => {
        const state = ctx.getState();
        ctx.dispatch(new LoadStudyTemplates());
        ctx.setState({
          ...state,
          SelectedTemplate: undefined,
          SelectedId: undefined,
          // SelectedVersion: undefined,
        });
      })
    );
  }
}
