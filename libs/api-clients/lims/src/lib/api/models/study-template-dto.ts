/* tslint:disable */
/* eslint-disable */
import { DocumentStatus } from './document-status';
import { StudyTemplateParameterDto } from './study-template-parameter-dto';
import { StudyTemplateResultDefinitionDto } from './study-template-result-definition-dto';
import { StudyTemplateSampleDto } from './study-template-sample-dto';
export interface StudyTemplateDto {
  code?: null | string;
  createdAt: string;
  createdBy: string;
  description?: null | string;
  id: string;
  modifiedAt: string;
  modifiedBy: string;
  name: string;
  officialName?: null | string;
  parameters: Array<StudyTemplateParameterDto>;
  parentId?: null | string;
  results: Array<StudyTemplateResultDefinitionDto>;
  revision?: null | string;
  samples: Array<StudyTemplateSampleDto>;
  status: DocumentStatus;
}
