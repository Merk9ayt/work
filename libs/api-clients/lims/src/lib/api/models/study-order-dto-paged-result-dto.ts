/* tslint:disable */
/* eslint-disable */
import { StudyOrderDto } from './study-order-dto';
export interface StudyOrderDtoPagedResultDto {
  entries: Array<StudyOrderDto>;
  page?: null | number;
  pageSize?: null | number;
  total?: null | number;
}
