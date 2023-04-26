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

import { LaboratoryCreateDto } from '../models/laboratory-create-dto';
import { LaboratoryDto } from '../models/laboratory-dto';
import { LaboratoryDtoPagedResultDto } from '../models/laboratory-dto-paged-result-dto';


/**
 * The laboratory management controller.
 */
@Injectable({
  providedIn: 'root',
})
export class LaboratoryService extends BaseService {
  constructor(
    config: LimsApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation laboratoryGetById
   */
  static readonly LaboratoryGetByIdPath = '/api/v1/laboratories/{id}';

  /**
   * Retrieves a batch by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `laboratoryGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  laboratoryGetById$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LaboratoryDto>> {

    const rb = new RequestBuilder(this.rootUrl, LaboratoryService.LaboratoryGetByIdPath, 'get');
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
        return r as StrictHttpResponse<LaboratoryDto>;
      })
    );
  }

  /**
   * Retrieves a batch by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `laboratoryGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  laboratoryGetById$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<LaboratoryDto> {

    return this.laboratoryGetById$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<LaboratoryDto>) => r.body as LaboratoryDto)
    );
  }

  /**
   * Retrieves a batch by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `laboratoryGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  laboratoryGetById$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LaboratoryDto>> {

    const rb = new RequestBuilder(this.rootUrl, LaboratoryService.LaboratoryGetByIdPath, 'get');
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
        return r as StrictHttpResponse<LaboratoryDto>;
      })
    );
  }

  /**
   * Retrieves a batch by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `laboratoryGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  laboratoryGetById(params: {
    id: string;
  },
  context?: HttpContext

): Observable<LaboratoryDto> {

    return this.laboratoryGetById$Response(params,context).pipe(
      map((r: StrictHttpResponse<LaboratoryDto>) => r.body as LaboratoryDto)
    );
  }

  /**
   * Path part for operation laboratoryGet
   */
  static readonly LaboratoryGetPath = '/api/v1/laboratories';

  /**
   * Retrieves the list of laboratory.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `laboratoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  laboratoryGet$Plain$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LaboratoryDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, LaboratoryService.LaboratoryGetPath, 'get');
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
        return r as StrictHttpResponse<LaboratoryDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of laboratory.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `laboratoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  laboratoryGet$Plain(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<LaboratoryDtoPagedResultDto> {

    return this.laboratoryGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<LaboratoryDtoPagedResultDto>) => r.body as LaboratoryDtoPagedResultDto)
    );
  }

  /**
   * Retrieves the list of laboratory.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `laboratoryGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  laboratoryGet$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LaboratoryDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, LaboratoryService.LaboratoryGetPath, 'get');
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
        return r as StrictHttpResponse<LaboratoryDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of laboratory.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `laboratoryGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  laboratoryGet(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<LaboratoryDtoPagedResultDto> {

    return this.laboratoryGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<LaboratoryDtoPagedResultDto>) => r.body as LaboratoryDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation laboratoryCreate
   */
  static readonly LaboratoryCreatePath = '/api/v1/laboratories';

  /**
   * Creates new laboratory.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `laboratoryCreate$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  laboratoryCreate$Plain$Response(params?: {

    /**
     * The tag pool content.
     */
    body?: LaboratoryCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LaboratoryDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, LaboratoryService.LaboratoryCreatePath, 'post');
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
        return r as StrictHttpResponse<LaboratoryDtoPagedResultDto>;
      })
    );
  }

  /**
   * Creates new laboratory.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `laboratoryCreate$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  laboratoryCreate$Plain(params?: {

    /**
     * The tag pool content.
     */
    body?: LaboratoryCreateDto
  },
  context?: HttpContext

): Observable<LaboratoryDtoPagedResultDto> {

    return this.laboratoryCreate$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<LaboratoryDtoPagedResultDto>) => r.body as LaboratoryDtoPagedResultDto)
    );
  }

  /**
   * Creates new laboratory.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `laboratoryCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  laboratoryCreate$Response(params?: {

    /**
     * The tag pool content.
     */
    body?: LaboratoryCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LaboratoryDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, LaboratoryService.LaboratoryCreatePath, 'post');
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
        return r as StrictHttpResponse<LaboratoryDtoPagedResultDto>;
      })
    );
  }

  /**
   * Creates new laboratory.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `laboratoryCreate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  laboratoryCreate(params?: {

    /**
     * The tag pool content.
     */
    body?: LaboratoryCreateDto
  },
  context?: HttpContext

): Observable<LaboratoryDtoPagedResultDto> {

    return this.laboratoryCreate$Response(params,context).pipe(
      map((r: StrictHttpResponse<LaboratoryDtoPagedResultDto>) => r.body as LaboratoryDtoPagedResultDto)
    );
  }

}
