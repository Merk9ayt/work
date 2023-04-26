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

import { Operation } from '../models/operation';
import { StudyOrderScheduleCreateDto } from '../models/study-order-schedule-create-dto';
import { StudyOrderScheduleDto } from '../models/study-order-schedule-dto';
import { StudyOrderScheduleDtoPagedResultDto } from '../models/study-order-schedule-dto-paged-result-dto';


/**
 * The study order schedule management controller.
 */
@Injectable({
  providedIn: 'root',
})
export class StudyOrderScheduleService extends BaseService {
  constructor(
    config: LimsApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation studyOrderScheduleGet
   */
  static readonly StudyOrderScheduleGetPath = '/api/v1/study-order-schedules';

  /**
   * Retrieves the list of published study order schedule matching defined filter conditions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderScheduleGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderScheduleGet$Plain$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyOrderScheduleDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderScheduleService.StudyOrderScheduleGetPath, 'get');
    if (params) {
      rb.query('Filters', params.Filters, {});
      rb.query('Sorts', params.Sorts, {});
      rb.query('Page', params.Page, {});
      rb.query('PageSize', params.PageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StudyOrderScheduleDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of published study order schedule matching defined filter conditions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderScheduleGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderScheduleGet$Plain(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StudyOrderScheduleDtoPagedResultDto> {

    return this.studyOrderScheduleGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyOrderScheduleDtoPagedResultDto>) => r.body as StudyOrderScheduleDtoPagedResultDto)
    );
  }

  /**
   * Retrieves the list of published study order schedule matching defined filter conditions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderScheduleGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderScheduleGet$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyOrderScheduleDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderScheduleService.StudyOrderScheduleGetPath, 'get');
    if (params) {
      rb.query('Filters', params.Filters, {});
      rb.query('Sorts', params.Sorts, {});
      rb.query('Page', params.Page, {});
      rb.query('PageSize', params.PageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StudyOrderScheduleDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of published study order schedule matching defined filter conditions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderScheduleGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderScheduleGet(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StudyOrderScheduleDtoPagedResultDto> {

    return this.studyOrderScheduleGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyOrderScheduleDtoPagedResultDto>) => r.body as StudyOrderScheduleDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation studyOrderScheduleCreate
   */
  static readonly StudyOrderScheduleCreatePath = '/api/v1/study-order-schedules';

  /**
   * Creates new Study order schedule.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderScheduleCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyOrderScheduleCreate$Response(params?: {

    /**
     * The Study order schedule content.
     */
    body?: StudyOrderScheduleCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderScheduleService.StudyOrderScheduleCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Creates new Study order schedule.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderScheduleCreate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyOrderScheduleCreate(params?: {

    /**
     * The Study order schedule content.
     */
    body?: StudyOrderScheduleCreateDto
  },
  context?: HttpContext

): Observable<void> {

    return this.studyOrderScheduleCreate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation studyOrderScheduleGetById
   */
  static readonly StudyOrderScheduleGetByIdPath = '/api/v1/study-order-schedules/{id}';

  /**
   * Retrieves a study order schedule by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderScheduleGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderScheduleGetById$Plain$Response(params: {

    /**
     * The study order schedule id
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyOrderScheduleDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderScheduleService.StudyOrderScheduleGetByIdPath, 'get');
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
        return r as StrictHttpResponse<StudyOrderScheduleDto>;
      })
    );
  }

  /**
   * Retrieves a study order schedule by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderScheduleGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderScheduleGetById$Plain(params: {

    /**
     * The study order schedule id
     */
    id: string;
  },
  context?: HttpContext

): Observable<StudyOrderScheduleDto> {

    return this.studyOrderScheduleGetById$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyOrderScheduleDto>) => r.body as StudyOrderScheduleDto)
    );
  }

  /**
   * Retrieves a study order schedule by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderScheduleGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderScheduleGetById$Response(params: {

    /**
     * The study order schedule id
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyOrderScheduleDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderScheduleService.StudyOrderScheduleGetByIdPath, 'get');
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
        return r as StrictHttpResponse<StudyOrderScheduleDto>;
      })
    );
  }

  /**
   * Retrieves a study order schedule by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderScheduleGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderScheduleGetById(params: {

    /**
     * The study order schedule id
     */
    id: string;
  },
  context?: HttpContext

): Observable<StudyOrderScheduleDto> {

    return this.studyOrderScheduleGetById$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyOrderScheduleDto>) => r.body as StudyOrderScheduleDto)
    );
  }

  /**
   * Path part for operation studyOrderScheduleDelete
   */
  static readonly StudyOrderScheduleDeletePath = '/api/v1/study-order-schedules/{id}';

  /**
   * Deletes the specified Study order schedule.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderScheduleDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderScheduleDelete$Response(params: {

    /**
     * The study order schedule id
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderScheduleService.StudyOrderScheduleDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Deletes the specified Study order schedule.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderScheduleDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderScheduleDelete(params: {

    /**
     * The study order schedule id
     */
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.studyOrderScheduleDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation studyOrderScheduleUpdate
   */
  static readonly StudyOrderScheduleUpdatePath = '/api/v1/study-order-schedules/{id}';

  /**
   * Updates the specified study order schedule template.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderScheduleUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyOrderScheduleUpdate$Response(params: {

    /**
     * The study order schedule id
     */
    id: string;

    /**
     * The data patching settings./
     */
    body?: Array<Operation>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderScheduleService.StudyOrderScheduleUpdatePath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Updates the specified study order schedule template.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderScheduleUpdate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyOrderScheduleUpdate(params: {

    /**
     * The study order schedule id
     */
    id: string;

    /**
     * The data patching settings./
     */
    body?: Array<Operation>
  },
  context?: HttpContext

): Observable<void> {

    return this.studyOrderScheduleUpdate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
