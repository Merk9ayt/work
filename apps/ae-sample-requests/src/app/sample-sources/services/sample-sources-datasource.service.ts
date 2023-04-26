import { Injectable } from '@angular/core';
import {
  SampleSourceCreateResultDto,
  SampleSourceDto,
  SampleSourceDtoPagedResultDto,
  SampleSourceService,
} from '@ae-labs/apis/sample-requests';
import { map, Observable } from 'rxjs';
import { PagedResult } from '@ae-labs/core';
import { SampleSourceModel } from '../models/sample-source.model';
import { SampleSourceMappingHelpers } from '../utils/sample-source-mapping-helper';

@Injectable({
  providedIn: 'any',
})
export class SampleSourcesDatasourceService {
  constructor(private readonly api: SampleSourceService) {}

  getSampleSources(/* @TODO: add filtering support */): Observable<
    PagedResult<SampleSourceModel>
  > {
    return this.api
      .sampleSourceGet()
      .pipe(
        map((result: SampleSourceDtoPagedResultDto) =>
          SampleSourceMappingHelpers.mapSampleSourcePagedResultDtoToPagedResult(
            result
          )
        )
      );
  }

  getSampleSource(id: string): Observable<SampleSourceModel> {
    return this.api
      .sampleSourceGetById({ id })
      .pipe(
        map((result: SampleSourceDto) =>
          SampleSourceMappingHelpers.mapSampleSourceDtoToSampleSourceModel(
            result
          )
        )
      );
  }

  createSampleSource(
    sampleSource: SampleSourceModel
  ): Observable<{ id: string }> {
    return this.api
      .sampleSourceCreate({
        body: SampleSourceMappingHelpers.mapSampleSourceToSampleSourceCreateDto(
          sampleSource
        ),
      })
      .pipe(
        map((r: SampleSourceCreateResultDto) => {
          return { id: r.id };
        })
      );
  }
}
