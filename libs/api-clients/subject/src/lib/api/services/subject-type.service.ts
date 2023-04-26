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
import { SubjectTypeCreateDto } from '../models/subject-type-create-dto';
import { SubjectTypeCreateResultDto } from '../models/subject-type-create-result-dto';
import { SubjectTypeDto } from '../models/subject-type-dto';
import { SubjectTypeDtoPagedResultDto } from '../models/subject-type-dto-paged-result-dto';


/**
 * The subject type management controller.
 */
@Injectable({
  providedIn: 'root',
})
export class SubjectTypeService extends BaseService {
  constructor(
    config: SubjectApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation subjectTypeGet
   */
  static readonly SubjectTypeGetPath = '/api/v1/subject-types';

  /**
   * Retrieves the list of subject types matching defined filter conditions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectTypeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectTypeGet$Plain$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubjectTypeDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectTypeService.SubjectTypeGetPath, 'get');
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
        return r as StrictHttpResponse<SubjectTypeDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of subject types matching defined filter conditions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectTypeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectTypeGet$Plain(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<SubjectTypeDtoPagedResultDto> {

    return this.subjectTypeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubjectTypeDtoPagedResultDto>) => r.body as SubjectTypeDtoPagedResultDto)
    );
  }

  /**
   * Retrieves the list of subject types matching defined filter conditions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectTypeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectTypeGet$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubjectTypeDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectTypeService.SubjectTypeGetPath, 'get');
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
        return r as StrictHttpResponse<SubjectTypeDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of subject types matching defined filter conditions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectTypeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectTypeGet(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<SubjectTypeDtoPagedResultDto> {

    return this.subjectTypeGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubjectTypeDtoPagedResultDto>) => r.body as SubjectTypeDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation subjectTypeCreate
   */
  static readonly SubjectTypeCreatePath = '/api/v1/subject-types';

  /**
   * Creates new subject type.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectTypeCreate$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectTypeCreate$Plain$Response(params?: {

    /**
     * The subject type content.
     */
    body?: SubjectTypeCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubjectTypeCreateResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectTypeService.SubjectTypeCreatePath, 'post');
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
        return r as StrictHttpResponse<SubjectTypeCreateResultDto>;
      })
    );
  }

  /**
   * Creates new subject type.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectTypeCreate$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectTypeCreate$Plain(params?: {

    /**
     * The subject type content.
     */
    body?: SubjectTypeCreateDto
  },
  context?: HttpContext

): Observable<SubjectTypeCreateResultDto> {

    return this.subjectTypeCreate$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubjectTypeCreateResultDto>) => r.body as SubjectTypeCreateResultDto)
    );
  }

  /**
   * Creates new subject type.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectTypeCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectTypeCreate$Response(params?: {

    /**
     * The subject type content.
     */
    body?: SubjectTypeCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubjectTypeCreateResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectTypeService.SubjectTypeCreatePath, 'post');
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
        return r as StrictHttpResponse<SubjectTypeCreateResultDto>;
      })
    );
  }

  /**
   * Creates new subject type.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectTypeCreate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectTypeCreate(params?: {

    /**
     * The subject type content.
     */
    body?: SubjectTypeCreateDto
  },
  context?: HttpContext

): Observable<SubjectTypeCreateResultDto> {

    return this.subjectTypeCreate$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubjectTypeCreateResultDto>) => r.body as SubjectTypeCreateResultDto)
    );
  }

  /**
   * Path part for operation subjectTypeGetById
   */
  static readonly SubjectTypeGetByIdPath = '/api/v1/subject-types/{id}';

  /**
   * Retrieves subject type by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectTypeGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectTypeGetById$Plain$Response(params: {

    /**
     * The unique identifier of the subject type.
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubjectTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectTypeService.SubjectTypeGetByIdPath, 'get');
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
        return r as StrictHttpResponse<SubjectTypeDto>;
      })
    );
  }

  /**
   * Retrieves subject type by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectTypeGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectTypeGetById$Plain(params: {

    /**
     * The unique identifier of the subject type.
     */
    id: string;
  },
  context?: HttpContext

): Observable<SubjectTypeDto> {

    return this.subjectTypeGetById$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubjectTypeDto>) => r.body as SubjectTypeDto)
    );
  }

  /**
   * Retrieves subject type by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectTypeGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectTypeGetById$Response(params: {

    /**
     * The unique identifier of the subject type.
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubjectTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectTypeService.SubjectTypeGetByIdPath, 'get');
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
        return r as StrictHttpResponse<SubjectTypeDto>;
      })
    );
  }

  /**
   * Retrieves subject type by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectTypeGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectTypeGetById(params: {

    /**
     * The unique identifier of the subject type.
     */
    id: string;
  },
  context?: HttpContext

): Observable<SubjectTypeDto> {

    return this.subjectTypeGetById$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubjectTypeDto>) => r.body as SubjectTypeDto)
    );
  }

  /**
   * Path part for operation subjectTypeDelete
   */
  static readonly SubjectTypeDeletePath = '/api/v1/subject-types/{id}';

  /**
   * Deletes the specified subject type.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectTypeDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectTypeDelete$Response(params: {

    /**
     * The subject type id
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectTypeService.SubjectTypeDeletePath, 'delete');
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
   * Deletes the specified subject type.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectTypeDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectTypeDelete(params: {

    /**
     * The subject type id
     */
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.subjectTypeDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation subjectTypeUpdate
   */
  static readonly SubjectTypeUpdatePath = '/api/v1/subject-types/{id}';

  /**
   * Updates the specified subject type.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectTypeUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectTypeUpdate$Response(params: {

    /**
     * The unique identifier of the subject type.
     */
    id: string;

    /**
     * The data patching settings.
     */
    body?: Array<Operation>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectTypeService.SubjectTypeUpdatePath, 'patch');
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
   * Updates the specified subject type.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subjectTypeUpdate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectTypeUpdate(params: {

    /**
     * The unique identifier of the subject type.
     */
    id: string;

    /**
     * The data patching settings.
     */
    body?: Array<Operation>
  },
  context?: HttpContext

): Observable<void> {

    return this.subjectTypeUpdate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
