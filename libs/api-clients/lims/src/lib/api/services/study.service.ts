/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { LimsApiConfiguration } from '../lims-api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { StudyDto } from '../models/study-dto';


/**
 * The study management controller.
 */
@Injectable({
  providedIn: 'root',
})
export class StudyService extends BaseService {
  constructor(
    config: LimsApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation studyGetById
   */
  static readonly StudyGetByIdPath = '/api/v1/studies/{id}';

  /**
   * Retrieves a study by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyGetById$Plain$Response(params: {

    /**
     * study identifier
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyService.StudyGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StudyDto>;
      })
    );
  }

  /**
   * Retrieves a study by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyGetById$Plain(params: {

    /**
     * study identifier
     */
    id: string;
  },
  context?: HttpContext

): Observable<StudyDto> {

    return this.studyGetById$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyDto>) => r.body as StudyDto)
    );
  }

  /**
   * Retrieves a study by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyGetById$Response(params: {

    /**
     * study identifier
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyService.StudyGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StudyDto>;
      })
    );
  }

  /**
   * Retrieves a study by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyGetById(params: {

    /**
     * study identifier
     */
    id: string;
  },
  context?: HttpContext

): Observable<StudyDto> {

    return this.studyGetById$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyDto>) => r.body as StudyDto)
    );
  }

}
