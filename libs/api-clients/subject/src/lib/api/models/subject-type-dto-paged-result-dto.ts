/* tslint:disable */
/* eslint-disable */
import { SubjectTypeDto } from './subject-type-dto';
export interface SubjectTypeDtoPagedResultDto {
  entries: Array<SubjectTypeDto>;
  page?: null | number;
  pageSize?: null | number;
  total?: null | number;
}
