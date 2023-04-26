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

import { Operation } from '../models/operation';
import { SampleRequestCreateDto } from '../models/sample-request-create-dto';
import { SampleRequestDto } from '../models/sample-request-dto';
import { SampleRequestDtoPagedResultDto } from '../models/sample-request-dto-paged-result-dto';


/**
 * The sample request management controller.
 */
@Injectable({
  providedIn: 'root',
})
export class SampleRequestService extends BaseService {
  constructor(
    config: SampleRequestsApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation sampleRequestGet
   */
  static readonly SampleRequestGetPath = '/api/v1/sample-requests';

  /**
   * Retrieves the list of sample requests matching defined filter conditions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleRequestGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleRequestGet$Plain$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SampleRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, SampleRequestService.SampleRequestGetPath, 'get');
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
        return r as StrictHttpResponse<SampleRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of sample requests matching defined filter conditions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleRequestGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleRequestGet$Plain(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<SampleRequestDtoPagedResultDto> {

    return this.sampleRequestGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SampleRequestDtoPagedResultDto>) => r.body as SampleRequestDtoPagedResultDto)
    );
  }

  /**
   * Retrieves the list of sample requests matching defined filter conditions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleRequestGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleRequestGet$Response(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SampleRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, SampleRequestService.SampleRequestGetPath, 'get');
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
        return r as StrictHttpResponse<SampleRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Retrieves the list of sample requests matching defined filter conditions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleRequestGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleRequestGet(params?: {
    Filters?: string;
    Sorts?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<SampleRequestDtoPagedResultDto> {

    return this.sampleRequestGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<SampleRequestDtoPagedResultDto>) => r.body as SampleRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation sampleRequestCreate
   */
  static readonly SampleRequestCreatePath = '/api/v1/sample-requests';

  /**
   * Creates new Sample Request.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleRequestCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  sampleRequestCreate$Response(params?: {

    /**
     * The Sample Request content.
     */
    body?: SampleRequestCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SampleRequestService.SampleRequestCreatePath, 'post');
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
   * Creates new Sample Request.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleRequestCreate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  sampleRequestCreate(params?: {

    /**
     * The Sample Request content.
     */
    body?: SampleRequestCreateDto
  },
  context?: HttpContext

): Observable<void> {

    return this.sampleRequestCreate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation sampleRequestGetById
   */
  static readonly SampleRequestGetByIdPath = '/api/v1/sample-requests/{id}';

  /**
   * Retrieves sample request by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleRequestGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleRequestGetById$Plain$Response(params: {

    /**
     * The unique identifier of the sample request.
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SampleRequestDto>> {

    const rb = new RequestBuilder(this.rootUrl, SampleRequestService.SampleRequestGetByIdPath, 'get');
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
        return r as StrictHttpResponse<SampleRequestDto>;
      })
    );
  }

  /**
   * Retrieves sample request by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleRequestGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleRequestGetById$Plain(params: {

    /**
     * The unique identifier of the sample request.
     */
    id: string;
  },
  context?: HttpContext

): Observable<SampleRequestDto> {

    return this.sampleRequestGetById$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SampleRequestDto>) => r.body as SampleRequestDto)
    );
  }

  /**
   * Retrieves sample request by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleRequestGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleRequestGetById$Response(params: {

    /**
     * The unique identifier of the sample request.
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SampleRequestDto>> {

    const rb = new RequestBuilder(this.rootUrl, SampleRequestService.SampleRequestGetByIdPath, 'get');
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
        return r as StrictHttpResponse<SampleRequestDto>;
      })
    );
  }

  /**
   * Retrieves sample request by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleRequestGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleRequestGetById(params: {

    /**
     * The unique identifier of the sample request.
     */
    id: string;
  },
  context?: HttpContext

): Observable<SampleRequestDto> {

    return this.sampleRequestGetById$Response(params,context).pipe(
      map((r: StrictHttpResponse<SampleRequestDto>) => r.body as SampleRequestDto)
    );
  }

  /**
   * Path part for operation sampleRequestUpdate
   */
  static readonly SampleRequestUpdatePath = '/api/v1/sample-requests/{id}';

  /**
   * Updates the specified sample request.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleRequestUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  sampleRequestUpdate$Response(params: {

    /**
     * The unique identifier of the sample request.
     */
    id: string;

    /**
     * The data patching settings.
     */
    body?: Array<Operation>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SampleRequestService.SampleRequestUpdatePath, 'patch');
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
   * Updates the specified sample request.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleRequestUpdate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  sampleRequestUpdate(params: {

    /**
     * The unique identifier of the sample request.
     */
    id: string;

    /**
     * The data patching settings.
     */
    body?: Array<Operation>
  },
  context?: HttpContext

): Observable<void> {

    return this.sampleRequestUpdate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation sampleRequestComplete
   */
  static readonly SampleRequestCompletePath = '/api/v1/sample-requests/{id}/complete';

  /**
   * Completes the specified sample request.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleRequestComplete()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleRequestComplete$Response(params: {

    /**
     * The unique identifier of the sample request.
     */
    id: string;

    /**
     * The tag (optional)
     */
    label?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SampleRequestService.SampleRequestCompletePath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('label', params.label, {});
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
   * Completes the specified sample request.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleRequestComplete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleRequestComplete(params: {

    /**
     * The unique identifier of the sample request.
     */
    id: string;

    /**
     * The tag (optional)
     */
    label?: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.sampleRequestComplete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation sampleRequestCancel
   */
  static readonly SampleRequestCancelPath = '/api/v1/sample-requests/{id}/cancel';

  /**
   * Cancels the specified sample request.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleRequestCancel()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleRequestCancel$Response(params: {

    /**
     * The unique identifier of the sample request.
     */
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SampleRequestService.SampleRequestCancelPath, 'post');
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
   * Cancels the specified sample request.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleRequestCancel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleRequestCancel(params: {

    /**
     * The unique identifier of the sample request.
     */
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.sampleRequestCancel$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
