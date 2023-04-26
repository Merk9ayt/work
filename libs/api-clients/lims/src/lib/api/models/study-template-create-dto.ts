/* tslint:disable */
/* eslint-disable */
import { StudyTemplateParameterDto } from './study-template-parameter-dto';
import { StudyTemplateResultDefinitionDto } from './study-template-result-definition-dto';
import { StudyTemplateSampleDto } from './study-template-sample-dto';
export interface StudyTemplateCreateDto {
  code?: null | string;
  description?: null | string;
  name: string;
  officialName?: null | string;
  parameters: Array<StudyTemplateParameterDto>;
  parentId?: null | string;
  results: Array<StudyTemplateResultDefinitionDto>;
  revision?: null | string;
  samples: Array<StudyTemplateSampleDto>;
}
