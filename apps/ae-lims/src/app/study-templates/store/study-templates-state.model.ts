import { StudyTemplateBaseModel } from '../models/study-template-base.model';
import { StudyTemplateModel } from '../models/study-template.model';

export interface StudyTemplatesStateModel {
  TemplateList: StudyTemplateBaseModel[];
  SelectedTemplate?: StudyTemplateModel;
  SelectedId?: string;
  // SelectedVersion?: string;
}
