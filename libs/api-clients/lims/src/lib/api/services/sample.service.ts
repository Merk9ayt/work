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

import { SampleDto } from '../models/sample-dto';


/**
 * The sample management controller.
 */
@Injectable({
  providedIn: 'root',
})
export class SampleService extends BaseService {
  constructor(
    config: LimsApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation sampleGetById
   */
  static readonly SampleGetByIdPath = '/api/v1/samples/{id}';

  /**
   * Retrieves a batch by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleGetById$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SampleDto>> {

    const rb = new RequestBuilder(this.rootUrl, SampleService.SampleGetByIdPath, 'get');
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
        return r as StrictHttpResponse<SampleDto>;
      })
    );
  }

  /**
   * Retrieves a batch by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleGetById$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<SampleDto> {

    return this.sampleGetById$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SampleDto>) => r.body as SampleDto)
    );
  }

  /**
   * Retrieves a batch by its identifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleGetById$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SampleDto>> {

    const rb = new RequestBuilder(this.rootUrl, SampleService.SampleGetByIdPath, 'get');
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
        return r as StrictHttpResponse<SampleDto>;
      })
    );
  }

  /**
   * Retrieves a batch by its identifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleGetById(params: {
    id: string;
  },
  context?: HttpContext

): Observable<SampleDto> {

    return this.sampleGetById$Response(params,context).pipe(
      map((r: StrictHttpResponse<SampleDto>) => r.body as SampleDto)
    );
  }

}
