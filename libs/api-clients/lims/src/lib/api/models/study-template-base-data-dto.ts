/* tslint:disable */
/* eslint-disable */
import { DocumentStatus } from './document-status';
export interface StudyTemplateBaseDataDto {
  code?: null | string;
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
}
