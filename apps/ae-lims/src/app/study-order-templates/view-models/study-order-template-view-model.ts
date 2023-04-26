import { ViewModelBase } from '@ae-labs/ui';
import { StudyOrderTemplateModel } from '../models/study-order-template.model';
import { StudyOrderTemplateOrderDefinitionListViewModel } from './study-order-template-order-definition-list-view-model';

export class StudyOrderTemplateViewModel extends ViewModelBase {
  data!: StudyOrderTemplateModel;
  studiesViewModel!: StudyOrderTemplateOrderDefinitionListViewModel;
  // samplesViewModel: StudyTemplateSampleListViewModel =
  //   new StudyTemplateSampleListViewModel();
  // resultsViewModel: StudyTemplateResultListViewModel =
  //   new StudyTemplateResultListViewModel();

  constructor(data?: StudyOrderTemplateModel) {
    super();
    if (data) {
      this.data = data;
      this.studiesViewModel =
        new StudyOrderTemplateOrderDefinitionListViewModel(data.studies);
      // this.samplesViewModel = new StudyTemplateSampleListViewModel(
      //   data.samples
      // );
      // this.resultsViewModel = new StudyTemplateResultListViewModel(
      //   data.results
      // );
    }
  }
}
