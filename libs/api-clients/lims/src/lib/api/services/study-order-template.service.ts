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
import { StudyOrderTemplateBaseDataDtoPagedResultDto } from '../models/study-order-template-base-data-dto-paged-result-dto';
import { StudyOrderTemplateCreateDto } from '../models/study-order-template-create-dto';
import { StudyOrderTemplateCreateResultDto } from '../models/study-order-template-create-result-dto';
import { StudyOrderTemplateDto } from '../models/study-order-template-dto';


/**
 * The study order template management controller.
 */
@Injectable({
  providedIn: 'root',
})
export class StudyOrderTemplateService extends BaseService {
  constructor(
    config: LimsApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation studyOrderTemplateGet
   */
  static readonly StudyOrderTemplateGetPath = '/api/v1/study-order-templates';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderTemplateGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderTemplateGet$Plain$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyOrderTemplateBaseDataDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderTemplateService.StudyOrderTemplateGetPath, 'get');
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
        return r as StrictHttpResponse<StudyOrderTemplateBaseDataDtoPagedResultDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderTemplateGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderTemplateGet$Plain(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StudyOrderTemplateBaseDataDtoPagedResultDto> {

    return this.studyOrderTemplateGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyOrderTemplateBaseDataDtoPagedResultDto>) => r.body as StudyOrderTemplateBaseDataDtoPagedResultDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderTemplateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderTemplateGet$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyOrderTemplateBaseDataDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderTemplateService.StudyOrderTemplateGetPath, 'get');
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
        return r as StrictHttpResponse<StudyOrderTemplateBaseDataDtoPagedResultDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderTemplateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderTemplateGet(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StudyOrderTemplateBaseDataDtoPagedResultDto> {

    return this.studyOrderTemplateGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyOrderTemplateBaseDataDtoPagedResultDto>) => r.body as StudyOrderTemplateBaseDataDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation studyOrderTemplateCreate
   */
  static readonly StudyOrderTemplateCreatePath = '/api/v1/study-order-templates';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderTemplateCreate$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyOrderTemplateCreate$Plain$Response(params?: {
    body?: StudyOrderTemplateCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyOrderTemplateCreateResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderTemplateService.StudyOrderTemplateCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StudyOrderTemplateCreateResultDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderTemplateCreate$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyOrderTemplateCreate$Plain(params?: {
    body?: StudyOrderTemplateCreateDto
  },
  context?: HttpContext

): Observable<StudyOrderTemplateCreateResultDto> {

    return this.studyOrderTemplateCreate$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyOrderTemplateCreateResultDto>) => r.body as StudyOrderTemplateCreateResultDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderTemplateCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyOrderTemplateCreate$Response(params?: {
    body?: StudyOrderTemplateCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyOrderTemplateCreateResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderTemplateService.StudyOrderTemplateCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StudyOrderTemplateCreateResultDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderTemplateCreate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyOrderTemplateCreate(params?: {
    body?: StudyOrderTemplateCreateDto
  },
  context?: HttpContext

): Observable<StudyOrderTemplateCreateResultDto> {

    return this.studyOrderTemplateCreate$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyOrderTemplateCreateResultDto>) => r.body as StudyOrderTemplateCreateResultDto)
    );
  }

  /**
   * Path part for operation studyOrderTemplateGetById
   */
  static readonly StudyOrderTemplateGetByIdPath = '/api/v1/study-order-templates/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderTemplateGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderTemplateGetById$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyOrderTemplateDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderTemplateService.StudyOrderTemplateGetByIdPath, 'get');
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
        return r as StrictHttpResponse<StudyOrderTemplateDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderTemplateGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderTemplateGetById$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StudyOrderTemplateDto> {

    return this.studyOrderTemplateGetById$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyOrderTemplateDto>) => r.body as StudyOrderTemplateDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderTemplateGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderTemplateGetById$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyOrderTemplateDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderTemplateService.StudyOrderTemplateGetByIdPath, 'get');
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
        return r as StrictHttpResponse<StudyOrderTemplateDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderTemplateGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderTemplateGetById(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StudyOrderTemplateDto> {

    return this.studyOrderTemplateGetById$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyOrderTemplateDto>) => r.body as StudyOrderTemplateDto)
    );
  }

  /**
   * Path part for operation studyOrderTemplateUpdate
   */
  static readonly StudyOrderTemplateUpdatePath = '/api/v1/study-order-templates/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderTemplateUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyOrderTemplateUpdate$Response(params: {
    id: string;
    body?: Array<Operation>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderTemplateService.StudyOrderTemplateUpdatePath, 'patch');
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
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderTemplateUpdate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyOrderTemplateUpdate(params: {
    id: string;
    body?: Array<Operation>
  },
  context?: HttpContext

): Observable<void> {

    return this.studyOrderTemplateUpdate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation studyOrderTemplatePublish
   */
  static readonly StudyOrderTemplatePublishPath = '/api/v1/study-order-templates/{id}/published';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderTemplatePublish()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderTemplatePublish$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderTemplateService.StudyOrderTemplatePublishPath, 'post');
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
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderTemplatePublish$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderTemplatePublish(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.studyOrderTemplatePublish$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation studyOrderTemplateArchived
   */
  static readonly StudyOrderTemplateArchivedPath = '/api/v1/study-order-templates/{id}/archived';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderTemplateArchived()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderTemplateArchived$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderTemplateService.StudyOrderTemplateArchivedPath, 'post');
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
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderTemplateArchived$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderTemplateArchived(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.studyOrderTemplateArchived$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation studyOrderTemplateStudyCreate
   */
  static readonly StudyOrderTemplateStudyCreatePath = '/api/v1/study-order-templates/{id}/created-order';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderTemplateStudyCreate()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderTemplateStudyCreate$Response(params: {
    id: string;
    plannedAt?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderTemplateService.StudyOrderTemplateStudyCreatePath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('plannedAt', params.plannedAt, {});
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
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderTemplateStudyCreate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderTemplateStudyCreate(params: {
    id: string;
    plannedAt?: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.studyOrderTemplateStudyCreate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
