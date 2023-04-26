import { StudyTemplateBaseModel } from '../../study-templates/models/study-template-base.model';
import { StudyOrderTemplateResultModel } from './study-order-template-result.model';
import { StudyOrderTemplateSampleSourceModel } from './study-order-template-sample-source.model';

export interface StudyOrderTemplateOrderDefinitionModel {
  studyTemplate: StudyTemplateBaseModel;
  sampleSources: StudyOrderTemplateSampleSourceModel[];
  studyResults: StudyOrderTemplateResultModel[];
}
