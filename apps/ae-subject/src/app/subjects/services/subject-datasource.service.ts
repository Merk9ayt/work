import {Injectable} from '@angular/core';
import {SubjectDto, SubjectDtoPagedResultDto, SubjectService} from "@ae-labs/apis/subject";
import {map, Observable} from 'rxjs';
import {PagedResult, PatchOperation} from '@ae-labs/core';
import {SubjectModel} from "../models/subject.model";
import {MappingHelpers} from '../utils/mapping-helper';

@Injectable({
  providedIn: 'any',
})
export class SubjectDatasourceService {
  constructor(private readonly api: SubjectService) {
  }

  getSubjects(subjectType: string/* @TODO: add filtering support */): Observable<PagedResult<SubjectModel>> {
    return this.api
      .subjectGetByType({typeId: subjectType})
      .pipe(
        map((result: SubjectDtoPagedResultDto) =>
          MappingHelpers.mapSubjectsPagedResultDtoToPagedResult(result)
        )
      );
  }

  getSubject(
    id: string,
  ): Observable<SubjectModel> {
    return this.api
      .subjectGetById({id})
      .pipe(
        map((result: SubjectDto) =>
          MappingHelpers.mapSubjectDtoToSubjectModel(result)
        )
      );
  }

  updateSubject(
    id: string,
    patch: PatchOperation[]
  ): Observable<void> {
    return this.api.subjectUpdate({
      id,
      body: patch.map(p => MappingHelpers.PatchOperationToPatchOperationDto(p)),
    });
  }

  createSubject(
    subject: SubjectModel
  ): Observable<string> {
    return this.api
      .subjectCreate({
        body: MappingHelpers.mapSubjectToSubjectCreateDto(
          subject
        ),
      })
      .pipe(
        map(r => {
          return r.id;
        })
      );
  }

  deleteSubject(id: string): Observable<void> {
    return this.api
      .subjectDelete({
        id
      })
      .pipe(
        map(() => {
          return;
        })
      );
  }
}
