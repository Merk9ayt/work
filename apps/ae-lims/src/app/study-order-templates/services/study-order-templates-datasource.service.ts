import { Injectable } from '@angular/core';
import {
  StudyOrderTemplateBaseDataDtoPagedResultDto,
  StudyOrderTemplateDto,
  StudyOrderTemplateService,
} from '@ae-labs/apis/lims';
import { map, Observable } from 'rxjs';
import { CoreMappingHelpers, PagedResult, PatchOperation } from '@ae-labs/core';
import { StudyOrderTemplateBaseModel } from '../models/study-order-template-base.model';
import { StudyOrderTemplateModel } from '../models/study-order-template.model';
import { StudyOrderTemplateMappingHelpers } from '../utils/study-order-template-mapping-helper';

@Injectable({
  providedIn: 'any',
})
export class StudyOrderTemplatesDatasourceService {
  constructor(private readonly api: StudyOrderTemplateService) {}

  getStudyOrderTemplates(/* @TODO: add filtering support */): Observable<
    PagedResult<StudyOrderTemplateBaseModel>
  > {
    return this.api
      .studyOrderTemplateGet()
      .pipe(
        map((result: StudyOrderTemplateBaseDataDtoPagedResultDto) =>
          StudyOrderTemplateMappingHelpers.mapStudyOrderTemplatesPagedResultDtoToPagedResult(
            result
          )
        )
      );
  }

  getStudyOrderTemplate(id: string): Observable<StudyOrderTemplateModel> {
    return this.api
      .studyOrderTemplateGetById({ id })
      .pipe(
        map((result: StudyOrderTemplateDto) =>
          StudyOrderTemplateMappingHelpers.mapStudyOrderTemplateDtoToStudyOrderTemplateModel(
            result
          )
        )
      );
  }

  updateStudyOrderTemplate(
    id: string,
    patch: PatchOperation[]
  ): Observable<void> {
    return this.api.studyOrderTemplateUpdate({
      id,
      body: patch.map(p =>
        CoreMappingHelpers.PatchOperationToPatchOperationDto(p)
      ),
    });
  }

  createStudyOrderTemplate(
    studyOrderTemplate: StudyOrderTemplateModel
  ): Observable<{ id: string }> {
    return this.api
      .studyOrderTemplateCreate({
        body: StudyOrderTemplateMappingHelpers.mapStudyOrderTemplateToStudyOrderTemplateCreateDto(
          studyOrderTemplate
        ),
      })
      .pipe(
        map(r => {
          return { id: r.id };
        })
      );
  }

  archiveStudyOrderTemplate(id: string): Observable<void> {
    return this.api.studyOrderTemplateArchived({ id }).pipe(
      map(() => {
        return;
      })
    );
  }
}
