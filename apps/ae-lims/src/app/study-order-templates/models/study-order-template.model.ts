import { StudyOrderTemplateBaseModel } from './study-order-template-base.model';
import { StudyOrderTemplateOrderDefinitionModel } from './study-order-template-order-definition.model';

export interface StudyOrderTemplateModel extends StudyOrderTemplateBaseModel {
  studies: StudyOrderTemplateOrderDefinitionModel[];
}
