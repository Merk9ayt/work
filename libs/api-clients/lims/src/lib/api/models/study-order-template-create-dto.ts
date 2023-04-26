/* tslint:disable */
/* eslint-disable */
import { StudyOrderTemplateOrderDefinitionDto } from './study-order-template-order-definition-dto';
export interface StudyOrderTemplateCreateDto {
  code?: null | string;
  description?: null | string;
  name: string;
  parentId?: null | string;
  revision?: null | string;
  studies: Array<StudyOrderTemplateOrderDefinitionDto>;
}
