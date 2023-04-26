/* tslint:disable */
/* eslint-disable */
import { SubjectDto } from './subject-dto';
export interface SubjectDtoPagedResultDto {
  entries: Array<SubjectDto>;
  page?: null | number;
  pageSize?: null | number;
  total?: null | number;
}
