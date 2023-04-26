/* tslint:disable */
/* eslint-disable */
import { SampleRequestDto } from './sample-request-dto';
export interface SampleRequestDtoPagedResultDto {
  entries: Array<SampleRequestDto>;
  page?: null | number;
  pageSize?: null | number;
  total?: null | number;
}
