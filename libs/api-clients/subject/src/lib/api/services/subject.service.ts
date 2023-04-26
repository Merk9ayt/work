/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { SubjectApiConfiguration } from '../subject-api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Operation } from '../models/operation';
import { SubjectCreateDto } from '../models/subject-create-dto';
import { SubjectCreateResultDto } from '../models/subject-create-result-dto';
import { SubjectDto } from '../models/subject-dto';
import { SubjectDtoPagedResultDto } from '../models/subject-dto-paged-result-dto';
import { SubjectRequestDto } from '../models/subject-request-dto';


/**
 * The subject management controller.
 */
@Injectable({
  providedIn: 'root',
})
export class SubjectService extends BaseService {
  constructor(
    config: SubjectApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation subjectGetByType
   */
  static readonly SubjectGetByTypePath = '/api/v1/subjects/type/{typeId}';

  /**
   * Retrieves the list of subjects by type matching defined filter conditions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectGetByType$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectGetByType$Plain$Response(params: {

    /**
     * Subject type id
     */
    typeId: string;
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubjectDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.SubjectGetByTypePath, 'get');
    if (params) {
      rb.path('typeId', params.typeId, {});
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
        return r as StrictHttpResponse<SubjectDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of subjects by type matching defined filter conditions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectGetByType$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectGetByType$Plain(params: {

    /**
     * Subject type id
     */
    typeId: string;
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<SubjectDtoPagedResultDto> {

    return this.subjectGetByType$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubjectDtoPagedResultDto>) => r.body as SubjectDtoPagedResultDto)
    );
  }

  /**
   * Retrieves the list of subjects by type matching defined filter conditions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectGetByType()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectGetByType$Response(params: {

    /**
     * Subject type id
     */
    typeId: string;
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubjectDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.SubjectGetByTypePath, 'get');
    if (params) {
      rb.path('typeId', params.typeId, {});
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
        return r as StrictHttpResponse<SubjectDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of subjects by type matching defined filter conditions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectGetByType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectGetByType(params: {

    /**
     * Subject type id
     */
    typeId: string;
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<SubjectDtoPagedResultDto> {

    return this.subjectGetByType$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubjectDtoPagedResultDto>) => r.body as SubjectDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation subjectCreate
   */
  static readonly SubjectCreatePath = '/api/v1/subjects';

  /**
   * Creates new subject.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectCreate$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectCreate$Plain$Response(params?: {

    /**
     * The subject content.
     */
    body?: SubjectCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubjectCreateResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.SubjectCreatePath, 'post');
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
        return r as StrictHttpResponse<SubjectCreateResultDto>;
      })
    );
  }

  /**
   * Creates new subject.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectCreate$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectCreate$Plain(params?: {

    /**
     * The subject content.
     */
    body?: SubjectCreateDto
  },
  context?: HttpContext

): Observable<SubjectCreateResultDto> {

    return this.subjectCreate$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubjectCreateResultDto>) => r.body as SubjectCreateResultDto)
    );
  }

  /**
   * Creates new subject.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectCreate$Response(params?: {

    /**
     * The subject content.
     */
    body?: SubjectCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubjectCreateResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.SubjectCreatePath, 'post');
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
        return r as StrictHttpResponse<SubjectCreateResultDto>;
      })
    );
  }

  /**
   * Creates new subject.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectCreate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectCreate(params?: {

    /**
     * The subject content.
     */
    body?: SubjectCreateDto
  },
  context?: HttpContext

): Observable<SubjectCreateResultDto> {

    return this.subjectCreate$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubjectCreateResultDto>) => r.body as SubjectCreateResultDto)
    );
  }

  /**
   * Path part for operation subjectRequest
   */
  static readonly SubjectRequestPath = '/api/v1/subjects/request';

  /**
   * Request subjects.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectRequest$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectRequest$Plain$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;

    /**
     * The subjects request.
     */
    body?: SubjectRequestDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SubjectDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.SubjectRequestPath, 'post');
    if (params) {
      rb.query('Filters', params.Filters, {});
      rb.query('Sorts', params.Sorts, {});
      rb.query('Page', params.Page, {});
      rb.query('PageSize', params.PageSize, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SubjectDto>>;
      })
    );
  }

  /**
   * Request subjects.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectRequest$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectRequest$Plain(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;

    /**
     * The subjects request.
     */
    body?: SubjectRequestDto
  },
  context?: HttpContext

): Observable<Array<SubjectDto>> {

    return this.subjectRequest$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SubjectDto>>) => r.body as Array<SubjectDto>)
    );
  }

  /**
   * Request subjects.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectRequest()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectRequest$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;

    /**
     * The subjects request.
     */
    body?: SubjectRequestDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SubjectDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.SubjectRequestPath, 'post');
    if (params) {
      rb.query('Filters', params.Filters, {});
      rb.query('Sorts', params.Sorts, {});
      rb.query('Page', params.Page, {});
      rb.query('PageSize', params.PageSize, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SubjectDto>>;
      })
    );
  }

  /**
   * Request subjects.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectRequest$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectRequest(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;

    /**
     * The subjects request.
     */
    body?: SubjectRequestDto
  },
  context?: HttpContext

): Observable<Array<SubjectDto>> {

    return this.subjectRequest$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SubjectDto>>) => r.body as Array<SubjectDto>)
    );
  }

  /**
   * Path part for operation subjectGetById
   */
  static readonly SubjectGetByIdPath = '/api/v1/subjects/{id}';

  /**
   * Retrieves subject by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectGetById$Plain$Response(params: {

    /**
     * The unique identifier of the subject.
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubjectDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.SubjectGetByIdPath, 'get');
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
        return r as StrictHttpResponse<SubjectDto>;
      })
    );
  }

  /**
   * Retrieves subject by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectGetById$Plain(params: {

    /**
     * The unique identifier of the subject.
     */
    id: string;
  },
  context?: HttpContext

): Observable<SubjectDto> {

    return this.subjectGetById$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubjectDto>) => r.body as SubjectDto)
    );
  }

  /**
   * Retrieves subject by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectGetById$Response(params: {

    /**
     * The unique identifier of the subject.
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubjectDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.SubjectGetByIdPath, 'get');
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
        return r as StrictHttpResponse<SubjectDto>;
      })
    );
  }

  /**
   * Retrieves subject by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectGetById(params: {

    /**
     * The unique identifier of the subject.
     */
    id: string;
  },
  context?: HttpContext

): Observable<SubjectDto> {

    return this.subjectGetById$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubjectDto>) => r.body as SubjectDto)
    );
  }

  /**
   * Path part for operation subjectDelete
   */
  static readonly SubjectDeletePath = '/api/v1/subjects/{id}';

  /**
   * Deletes the specified subject.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectDelete$Response(params: {

    /**
     * The subject id
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.SubjectDeletePath, 'delete');
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
   * Deletes the specified subject.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectDelete(params: {

    /**
     * The subject id
     */
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.subjectDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation subjectUpdate
   */
  static readonly SubjectUpdatePath = '/api/v1/subjects/{id}';

  /**
   * Updates the specified subject.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectUpdate$Response(params: {

    /**
     * The unique identifier of the subject.
     */
    id: string;

    /**
     * The data patching settings.
     */
    body?: Array<Operation>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectService.SubjectUpdatePath, 'patch');
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
   * Updates the specified subject.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectUpdate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectUpdate(params: {

    /**
     * The unique identifier of the subject.
     */
    id: string;

    /**
     * The data patching settings.
     */
    body?: Array<Operation>
  },
  context?: HttpContext

): Observable<void> {

    return this.subjectUpdate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
