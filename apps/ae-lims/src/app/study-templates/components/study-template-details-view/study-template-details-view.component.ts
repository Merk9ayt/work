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
import { StudyTemplateModel } from '../../models/study-template.model';
import { StudyTemplatesDatasourceService } from '../../services/study-templates-datasource.service';
import { ArchiveStudyTemplate } from '../../store/study-templates-state.actions';
import { StudyTemplatesState } from '../../store/study-templates.state';
import { StudyTemplateViewModel } from '../../view-models/study-template-view-model';
import { StudyTemplateBaseFormComponent } from '../study-template-base-form.component';

@Component({
  selector: 'ae-lims-study-template-details-view',
  templateUrl: './study-template-details-view.component.html',
  styleUrls: ['./study-template-details-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: I18NEXT_NAMESPACE,
      useValue: 'lims.study-templates',
    },
  ],
})
export class StudyTemplateDetailsViewComponent
  extends StudyTemplateBaseFormComponent
  implements OnInit
{
  template: StudyTemplateModel | undefined;
  canEdit = false;
  canDelete = false;
  viewModel: StudyTemplateViewModel = new StudyTemplateViewModel();

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    messageBus: MessageBus,
    @Optional() @Inject(AE_FEATURE_NAME) featureName: string,
    store: Store,
    private readonly dataSourceService: StudyTemplatesDatasourceService,
    private readonly cdr: ChangeDetectorRef
  ) {
    super(router, activatedRoute, messageBus, featureName, store);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.store
      .select(StudyTemplatesState.selectedStudyTemplate)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(x => {
        this.template = x;
        this.canEdit = x?.status === DocumentStatus.Draft ?? false;
        this.canDelete = x?.status === DocumentStatus.Draft ?? false;
        this.cdr.detectChanges();
        this.viewModel = new StudyTemplateViewModel(x);
        this.cdr.detectChanges();
      });
  }

  override delete(): void {
    if (!this.id) {
      return;
    }

    this.store.dispatch(new ArchiveStudyTemplate(this.id)).subscribe(() => {
      this.toBaseView();
    });
  }
}
