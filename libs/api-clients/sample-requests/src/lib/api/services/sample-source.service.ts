/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { SampleRequestsApiConfiguration } from '../sample-requests-api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SampleSourceCreateDto } from '../models/sample-source-create-dto';
import { SampleSourceCreateResultDto } from '../models/sample-source-create-result-dto';
import { SampleSourceDto } from '../models/sample-source-dto';
import { SampleSourceDtoPagedResultDto } from '../models/sample-source-dto-paged-result-dto';


/**
 * The sample source management controller.
 */
@Injectable({
  providedIn: 'root',
})
export class SampleSourceService extends BaseService {
  constructor(
    config: SampleRequestsApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation sampleSourceGet
   */
  static readonly SampleSourceGetPath = '/api/v1/sample-sources';

  /**
   * Retrieves the list of sample sources matching defined filter conditions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleSourceGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleSourceGet$Plain$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SampleSourceDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, SampleSourceService.SampleSourceGetPath, 'get');
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
        return r as StrictHttpResponse<SampleSourceDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of sample sources matching defined filter conditions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleSourceGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleSourceGet$Plain(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<SampleSourceDtoPagedResultDto> {

    return this.sampleSourceGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SampleSourceDtoPagedResultDto>) => r.body as SampleSourceDtoPagedResultDto)
    );
  }

  /**
   * Retrieves the list of sample sources matching defined filter conditions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleSourceGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleSourceGet$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SampleSourceDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, SampleSourceService.SampleSourceGetPath, 'get');
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
        return r as StrictHttpResponse<SampleSourceDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of sample sources matching defined filter conditions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleSourceGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleSourceGet(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<SampleSourceDtoPagedResultDto> {

    return this.sampleSourceGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<SampleSourceDtoPagedResultDto>) => r.body as SampleSourceDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation sampleSourceCreate
   */
  static readonly SampleSourceCreatePath = '/api/v1/sample-sources';

  /**
   * Creates new Sample Source.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleSourceCreate$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  sampleSourceCreate$Plain$Response(params?: {

    /**
     * The Sample Source content.
     */
    body?: SampleSourceCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SampleSourceCreateResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, SampleSourceService.SampleSourceCreatePath, 'post');
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
        return r as StrictHttpResponse<SampleSourceCreateResultDto>;
      })
    );
  }

  /**
   * Creates new Sample Source.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleSourceCreate$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  sampleSourceCreate$Plain(params?: {

    /**
     * The Sample Source content.
     */
    body?: SampleSourceCreateDto
  },
  context?: HttpContext

): Observable<SampleSourceCreateResultDto> {

    return this.sampleSourceCreate$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SampleSourceCreateResultDto>) => r.body as SampleSourceCreateResultDto)
    );
  }

  /**
   * Creates new Sample Source.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleSourceCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  sampleSourceCreate$Response(params?: {

    /**
     * The Sample Source content.
     */
    body?: SampleSourceCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SampleSourceCreateResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, SampleSourceService.SampleSourceCreatePath, 'post');
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
        return r as StrictHttpResponse<SampleSourceCreateResultDto>;
      })
    );
  }

  /**
   * Creates new Sample Source.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleSourceCreate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  sampleSourceCreate(params?: {

    /**
     * The Sample Source content.
     */
    body?: SampleSourceCreateDto
  },
  context?: HttpContext

): Observable<SampleSourceCreateResultDto> {

    return this.sampleSourceCreate$Response(params,context).pipe(
      map((r: StrictHttpResponse<SampleSourceCreateResultDto>) => r.body as SampleSourceCreateResultDto)
    );
  }

  /**
   * Path part for operation sampleSourceGetById
   */
  static readonly SampleSourceGetByIdPath = '/api/v1/sample-sources/{id}';

  /**
   * Retrieves sample sources by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleSourceGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleSourceGetById$Plain$Response(params: {

    /**
     * The unique identifier of the sample source.
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SampleSourceDto>> {

    const rb = new RequestBuilder(this.rootUrl, SampleSourceService.SampleSourceGetByIdPath, 'get');
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
        return r as StrictHttpResponse<SampleSourceDto>;
      })
    );
  }

  /**
   * Retrieves sample sources by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleSourceGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleSourceGetById$Plain(params: {

    /**
     * The unique identifier of the sample source.
     */
    id: string;
  },
  context?: HttpContext

): Observable<SampleSourceDto> {

    return this.sampleSourceGetById$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SampleSourceDto>) => r.body as SampleSourceDto)
    );
  }

  /**
   * Retrieves sample sources by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleSourceGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleSourceGetById$Response(params: {

    /**
     * The unique identifier of the sample source.
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SampleSourceDto>> {

    const rb = new RequestBuilder(this.rootUrl, SampleSourceService.SampleSourceGetByIdPath, 'get');
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
        return r as StrictHttpResponse<SampleSourceDto>;
      })
    );
  }

  /**
   * Retrieves sample sources by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleSourceGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleSourceGetById(params: {

    /**
     * The unique identifier of the sample source.
     */
    id: string;
  },
  context?: HttpContext

): Observable<SampleSourceDto> {

    return this.sampleSourceGetById$Response(params,context).pipe(
      map((r: StrictHttpResponse<SampleSourceDto>) => r.body as SampleSourceDto)
    );
  }

  /**
   * Path part for operation sampleSourceActivate
   */
  static readonly SampleSourceActivatePath = '/api/v1/sample-sources/{id}/activate';

  /**
   * Activate the specified sample source.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleSourceActivate()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleSourceActivate$Response(params: {

    /**
     * The unique identifier of the sample source.
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SampleSourceService.SampleSourceActivatePath, 'post');
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
   * Activate the specified sample source.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleSourceActivate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleSourceActivate(params: {

    /**
     * The unique identifier of the sample source.
     */
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.sampleSourceActivate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation sampleSourceDeactivate
   */
  static readonly SampleSourceDeactivatePath = '/api/v1/sample-sources/{id}/deactivate';

  /**
   * Deactivate the specified sample source.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleSourceDeactivate()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleSourceDeactivate$Response(params: {

    /**
     * The unique identifier of the sample source.
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SampleSourceService.SampleSourceDeactivatePath, 'post');
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
   * Deactivate the specified sample source.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleSourceDeactivate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleSourceDeactivate(params: {

    /**
     * The unique identifier of the sample source.
     */
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.sampleSourceDeactivate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation sampleSourceArchive
   */
  static readonly SampleSourceArchivePath = '/api/v1/sample-sources/{id}/archive';

  /**
   * Archive the specified sample source.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleSourceArchive()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleSourceArchive$Response(params: {

    /**
     * The unique identifier of the sample source.
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SampleSourceService.SampleSourceArchivePath, 'post');
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
   * Archive the specified sample source.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleSourceArchive$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleSourceArchive(params: {

    /**
     * The unique identifier of the sample source.
     */
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.sampleSourceArchive$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
