import { DocumentStatus } from '@ae-labs/core';

export interface StudyTemplateBaseModel {
  id: string;

  parentId?: null | string;

  code?: null | string;

  revision?: null | string;

  name: string;

  description?: null | string;

  status: DocumentStatus;
}
