/* tslint:disable */
/* eslint-disable */
import { LaboratoryDto } from './laboratory-dto';
export interface LaboratoryDtoPagedResultDto {
  entries: Array<LaboratoryDto>;
  page?: null | number;
  pageSize?: null | number;
  total?: null | number;
}
