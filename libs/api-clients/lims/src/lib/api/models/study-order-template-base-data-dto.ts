/* tslint:disable */
/* eslint-disable */
import { DocumentStatus } from './document-status';
export interface StudyOrderTemplateBaseDataDto {
  code: string;
  createdAt: string;
  createdBy: string;
  description?: null | string;
  id: string;
  modifiedAt: string;
  modifiedBy: string;
  name: string;
  revision: string;
  status: DocumentStatus;
}
