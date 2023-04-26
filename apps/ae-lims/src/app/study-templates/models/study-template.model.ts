import { StudyTemplateBaseModel } from './study-template-base.model';
import { StudyTemplateParameterDefinitionModel } from './study-template-parameter-definition.model';
import { StudyTemplateResultDefinitionModel } from './study-template-result-definition.model';
import { StudyTemplateSampleModel } from './study-template-sample.model';

export interface StudyTemplateModel extends StudyTemplateBaseModel {
  officialName?: string;
  parameters: StudyTemplateParameterDefinitionModel[];
  samples: StudyTemplateSampleModel[];
  results: StudyTemplateResultDefinitionModel[];
}
