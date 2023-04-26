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
import { StudyTemplateBaseDataDtoPagedResultDto } from '../models/study-template-base-data-dto-paged-result-dto';
import { StudyTemplateCreateDto } from '../models/study-template-create-dto';
import { StudyTemplateCreateResultDto } from '../models/study-template-create-result-dto';
import { StudyTemplateDto } from '../models/study-template-dto';


/**
 * The study order management controller.
 */
@Injectable({
  providedIn: 'root',
})
export class StudyTemplateService extends BaseService {
  constructor(
    config: LimsApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation studyTemplatesGet
   */
  static readonly StudyTemplatesGetPath = '/api/v1/study-templates';

  /**
   * Retrieves the list of actual study templates.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyTemplatesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyTemplatesGet$Plain$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyTemplateBaseDataDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyTemplateService.StudyTemplatesGetPath, 'get');
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
        return r as StrictHttpResponse<StudyTemplateBaseDataDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of actual study templates.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyTemplatesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyTemplatesGet$Plain(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StudyTemplateBaseDataDtoPagedResultDto> {

    return this.studyTemplatesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyTemplateBaseDataDtoPagedResultDto>) => r.body as StudyTemplateBaseDataDtoPagedResultDto)
    );
  }

  /**
   * Retrieves the list of actual study templates.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyTemplatesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyTemplatesGet$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyTemplateBaseDataDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyTemplateService.StudyTemplatesGetPath, 'get');
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
        return r as StrictHttpResponse<StudyTemplateBaseDataDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of actual study templates.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyTemplatesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyTemplatesGet(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StudyTemplateBaseDataDtoPagedResultDto> {

    return this.studyTemplatesGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyTemplateBaseDataDtoPagedResultDto>) => r.body as StudyTemplateBaseDataDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation studyTemplateCreate
   */
  static readonly StudyTemplateCreatePath = '/api/v1/study-templates';

  /**
   * Creates new Study template.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyTemplateCreate$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyTemplateCreate$Plain$Response(params?: {

    /**
     * The Study template content.
     */
    body?: StudyTemplateCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyTemplateCreateResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyTemplateService.StudyTemplateCreatePath, 'post');
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
        return r as StrictHttpResponse<StudyTemplateCreateResultDto>;
      })
    );
  }

  /**
   * Creates new Study template.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyTemplateCreate$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyTemplateCreate$Plain(params?: {

    /**
     * The Study template content.
     */
    body?: StudyTemplateCreateDto
  },
  context?: HttpContext

): Observable<StudyTemplateCreateResultDto> {

    return this.studyTemplateCreate$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyTemplateCreateResultDto>) => r.body as StudyTemplateCreateResultDto)
    );
  }

  /**
   * Creates new Study template.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyTemplateCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyTemplateCreate$Response(params?: {

    /**
     * The Study template content.
     */
    body?: StudyTemplateCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyTemplateCreateResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyTemplateService.StudyTemplateCreatePath, 'post');
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
        return r as StrictHttpResponse<StudyTemplateCreateResultDto>;
      })
    );
  }

  /**
   * Creates new Study template.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyTemplateCreate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyTemplateCreate(params?: {

    /**
     * The Study template content.
     */
    body?: StudyTemplateCreateDto
  },
  context?: HttpContext

): Observable<StudyTemplateCreateResultDto> {

    return this.studyTemplateCreate$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyTemplateCreateResultDto>) => r.body as StudyTemplateCreateResultDto)
    );
  }

  /**
   * Path part for operation studyTemplateGetById
   */
  static readonly StudyTemplateGetByIdPath = '/api/v1/study-templates/{id}';

  /**
   * Retrieves the study template by id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyTemplateGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyTemplateGetById$Plain$Response(params: {

    /**
     * The study template id
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyTemplateDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyTemplateService.StudyTemplateGetByIdPath, 'get');
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
        return r as StrictHttpResponse<StudyTemplateDto>;
      })
    );
  }

  /**
   * Retrieves the study template by id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyTemplateGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyTemplateGetById$Plain(params: {

    /**
     * The study template id
     */
    id: string;
  },
  context?: HttpContext

): Observable<StudyTemplateDto> {

    return this.studyTemplateGetById$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyTemplateDto>) => r.body as StudyTemplateDto)
    );
  }

  /**
   * Retrieves the study template by id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyTemplateGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyTemplateGetById$Response(params: {

    /**
     * The study template id
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyTemplateDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyTemplateService.StudyTemplateGetByIdPath, 'get');
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
        return r as StrictHttpResponse<StudyTemplateDto>;
      })
    );
  }

  /**
   * Retrieves the study template by id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyTemplateGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyTemplateGetById(params: {

    /**
     * The study template id
     */
    id: string;
  },
  context?: HttpContext

): Observable<StudyTemplateDto> {

    return this.studyTemplateGetById$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyTemplateDto>) => r.body as StudyTemplateDto)
    );
  }

  /**
   * Path part for operation studyTemplateUpdate
   */
  static readonly StudyTemplateUpdatePath = '/api/v1/study-templates/{id}';

  /**
   * Updates the specified study template.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyTemplateUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyTemplateUpdate$Response(params: {

    /**
     * The study template id
     */
    id: string;

    /**
     * The data patching settings./
     */
    body?: Array<Operation>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StudyTemplateService.StudyTemplateUpdatePath, 'patch');
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
   * Updates the specified study template.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyTemplateUpdate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studyTemplateUpdate(params: {

    /**
     * The study template id
     */
    id: string;

    /**
     * The data patching settings./
     */
    body?: Array<Operation>
  },
  context?: HttpContext

): Observable<void> {

    return this.studyTemplateUpdate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation studyTemplatePublish
   */
  static readonly StudyTemplatePublishPath = '/api/v1/study-templates/{id}/published';

  /**
   * Publish the specified study template.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyTemplatePublish()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyTemplatePublish$Response(params: {

    /**
     * The study template code
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StudyTemplateService.StudyTemplatePublishPath, 'post');
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
   * Publish the specified study template.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyTemplatePublish$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyTemplatePublish(params: {

    /**
     * The study template code
     */
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.studyTemplatePublish$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation studyTemplateArchived
   */
  static readonly StudyTemplateArchivedPath = '/api/v1/study-templates/{id}/archived';

  /**
   * Archive the specified study template.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyTemplateArchived()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyTemplateArchived$Response(params: {

    /**
     * The study template id
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StudyTemplateService.StudyTemplateArchivedPath, 'post');
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
   * Archive the specified study template.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyTemplateArchived$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyTemplateArchived(params: {

    /**
     * The study template id
     */
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.studyTemplateArchived$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
