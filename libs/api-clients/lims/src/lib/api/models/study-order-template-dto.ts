/* tslint:disable */
/* eslint-disable */
import { DocumentStatus } from './document-status';
import { StudyOrderTemplateOrderDefinitionDto } from './study-order-template-order-definition-dto';
export interface StudyOrderTemplateDto {
  code: string;
  createdAt: string;
  createdBy: string;
  description?: null | string;
  id: string;
  modifiedAt: string;
  modifiedBy: string;
  name: string;
  parentId?: null | string;
  revision: string;
  status: DocumentStatus;
  studies: Array<StudyOrderTemplateOrderDefinitionDto>;
}
