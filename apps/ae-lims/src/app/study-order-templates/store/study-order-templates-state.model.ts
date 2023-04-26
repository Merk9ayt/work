import { StudyOrderTemplateBaseModel } from '../models/study-order-template-base.model';
import { StudyOrderTemplateModel } from '../models/study-order-template.model';

export interface StudyOrderTemplatesStateModel {
  TemplateList: StudyOrderTemplateBaseModel[];
  SelectedTemplate?: StudyOrderTemplateModel;
  SelectedId?: string;
}
