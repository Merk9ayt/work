import { Injectable } from '@angular/core';
import {
  StudyTemplateBaseDataDtoPagedResultDto,
  StudyTemplateDto,
  StudyTemplateService,
} from '@ae-labs/apis/lims';
import { map, Observable } from 'rxjs';
import { PagedResult, PatchOperation } from '@ae-labs/core';
import { StudyTemplateBaseModel } from '../models/study-template-base.model';
import { StudyTemplateModel } from '../models/study-template.model';
import { StudyTemplateMappingHelpers } from '../utils/study-template-mapping-helper';

@Injectable({
  providedIn: 'any',
})
export class StudyTemplatesDatasourceService {
  constructor(private readonly api: StudyTemplateService) {}

  getStudyTemplates(/* @TODO: add filtering support */): Observable<
    PagedResult<StudyTemplateBaseModel>
  > {
    return this.api
      .studyTemplatesGet()
      .pipe(
        map((result: StudyTemplateBaseDataDtoPagedResultDto) =>
          StudyTemplateMappingHelpers.mapStudyTemplatesPagedResultDtoToPagedResult(
            result
          )
        )
      );
  }

  getStudyTemplate(id: string): Observable<StudyTemplateModel> {
    return this.api
      .studyTemplateGetById({ id })
      .pipe(
        map((result: StudyTemplateDto) =>
          StudyTemplateMappingHelpers.mapStudyTemplateDtoToStudyTemplateModel(
            result
          )
        )
      );
  }

  updateStudyTemplate(id: string, patch: PatchOperation[]): Observable<void> {
    return this.api.studyTemplateUpdate({
      id,
      body: patch.map(p =>
        StudyTemplateMappingHelpers.PatchOperationToPatchOperationDto(p)
      ),
    });
  }

  createStudyTemplate(
    studyTemplate: StudyTemplateModel
  ): Observable<{ id: string }> {
    return this.api
      .studyTemplateCreate({
        body: StudyTemplateMappingHelpers.mapStudyTemplateToStudyTemplateCreateDto(
          studyTemplate
        ),
      })
      .pipe(
        map(r => {
          return { id: r.id };
        })
      );
  }

  archiveStudyTemplate(id: string): Observable<void> {
    return this.api.studyTemplateArchived({ id }).pipe(
      map(() => {
        return;
      })
    );
  }
}
