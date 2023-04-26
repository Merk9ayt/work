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

import { StudyOrderDto } from '../models/study-order-dto';
import { StudyOrderDtoPagedResultDto } from '../models/study-order-dto-paged-result-dto';


/**
 * The study order management controller.
 */
@Injectable({
  providedIn: 'root',
})
export class StudyOrderService extends BaseService {
  constructor(
    config: LimsApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation studyOrderGet
   */
  static readonly StudyOrderGetPath = '/api/v1/study-orders';

  /**
   * Retrieves the list of study orders matching defined filter conditions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderGet$Plain$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyOrderDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderService.StudyOrderGetPath, 'get');
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
        return r as StrictHttpResponse<StudyOrderDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of study orders matching defined filter conditions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderGet$Plain(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StudyOrderDtoPagedResultDto> {

    return this.studyOrderGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyOrderDtoPagedResultDto>) => r.body as StudyOrderDtoPagedResultDto)
    );
  }

  /**
   * Retrieves the list of study orders matching defined filter conditions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderGet$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyOrderDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderService.StudyOrderGetPath, 'get');
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
        return r as StrictHttpResponse<StudyOrderDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of study orders matching defined filter conditions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderGet(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StudyOrderDtoPagedResultDto> {

    return this.studyOrderGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyOrderDtoPagedResultDto>) => r.body as StudyOrderDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation studyOrderGetById
   */
  static readonly StudyOrderGetByIdPath = '/api/v1/study-orders/{id}';

  /**
   * Retrieves study order by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderGetById$Plain$Response(params: {

    /**
     * Study order identifier
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyOrderDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderService.StudyOrderGetByIdPath, 'get');
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
        return r as StrictHttpResponse<StudyOrderDto>;
      })
    );
  }

  /**
   * Retrieves study order by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderGetById$Plain(params: {

    /**
     * Study order identifier
     */
    id: string;
  },
  context?: HttpContext

): Observable<StudyOrderDto> {

    return this.studyOrderGetById$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyOrderDto>) => r.body as StudyOrderDto)
    );
  }

  /**
   * Retrieves study order by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studyOrderGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderGetById$Response(params: {

    /**
     * Study order identifier
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StudyOrderDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudyOrderService.StudyOrderGetByIdPath, 'get');
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
        return r as StrictHttpResponse<StudyOrderDto>;
      })
    );
  }

  /**
   * Retrieves study order by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `studyOrderGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studyOrderGetById(params: {

    /**
     * Study order identifier
     */
    id: string;
  },
  context?: HttpContext

): Observable<StudyOrderDto> {

    return this.studyOrderGetById$Response(params,context).pipe(
      map((r: StrictHttpResponse<StudyOrderDto>) => r.body as StudyOrderDto)
    );
  }

}
