import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  Optional,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { I18NEXT_NAMESPACE } from 'angular-i18next';
import { takeUntil } from 'rxjs';
import { AE_FEATURE_NAME, DocumentStatus } from '@ae-labs/core';
import { MessageBus } from '@ae-labs/messaging';
import { StudyOrderTemplateModel } from '../../models/study-order-template.model';
import { StudyOrderTemplatesDatasourceService } from '../../services/study-order-templates-datasource.service';
import { StudyOrderTemplatesState } from '../../store/study-order-templates.state';
import { ArchiveStudyOrderTemplate } from '../../store/studyorder--templates-state.actions';
import { StudyOrderTemplateViewModel } from '../../view-models/study-order-template-view-model';
import { StudyOrderTemplateBaseFormComponent } from '../study-order-template-base-form.component';

@Component({
  selector: 'ae-lims-study-order-template-details-view',
  templateUrl: './study-order-template-details-view.component.html',
  styleUrls: ['./study-order-template-details-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: I18NEXT_NAMESPACE,
      useValue: 'lims.study-templates',
    },
  ],
})
export class StudyOrderTemplateDetailsViewComponent
  extends StudyOrderTemplateBaseFormComponent
  implements OnInit
{
  template: StudyOrderTemplateModel | undefined;
  canEdit = false;
  canDelete = false;

  viewModel: StudyOrderTemplateViewModel = new StudyOrderTemplateViewModel();

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    messageBus: MessageBus,
    @Optional() @Inject(AE_FEATURE_NAME) featureName: string,
    store: Store,
    private readonly dataSourceService: StudyOrderTemplatesDatasourceService,
    private readonly cdr: ChangeDetectorRef
  ) {
    super(router, activatedRoute, messageBus, featureName, store);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.store
      .select(StudyOrderTemplatesState.selectedStudyOrderTemplate)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(x => {
        this.template = x;
        this.canEdit = x?.status === DocumentStatus.Draft ?? false;
        this.canDelete = x?.status === DocumentStatus.Draft ?? false;
        this.viewModel = new StudyOrderTemplateViewModel(x);
        this.cdr.detectChanges();
      });
  }

  override delete(): void {
    if (!this.id) {
      return;
    }

    this.store
      .dispatch(new ArchiveStudyOrderTemplate(this.id))
      .subscribe(() => {
        this.toBaseView();
      });
  }
}
