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
import { AE_FEATURE_NAME } from '@ae-labs/core';
import { MessageBus } from '@ae-labs/messaging';
import { SampleSourceStatusEnum } from '../../models/sample-source-status.enum';
import { SampleSourceModel } from '../../models/sample-source.model';
import { SampleSourcesDatasourceService } from '../../services/sample-sources-datasource.service';
import { SampleSourcesState } from '../../store/sample-sources.state';
import { SampleSourceBaseFormComponent } from '../sample-source-base-form.component';

@Component({
  selector: 'ae-lims-sample-source-details-view',
  templateUrl: './sample-source-details-view.component.html',
  styleUrls: ['./sample-source-details-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: I18NEXT_NAMESPACE,
      useValue: 'lims.sample-sources',
    },
  ],
})
export class SampleSourceDetailsViewComponent
  extends SampleSourceBaseFormComponent
  implements OnInit
{
  sampleSource: SampleSourceModel = {
    name: '',
    specimens: [],
    status: SampleSourceStatusEnum.Deactivated,
    id: '',
  };
  canEdit = false;
  canDelete = false;

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    messageBus: MessageBus,
    @Optional() @Inject(AE_FEATURE_NAME) featureName: string,
    store: Store,
    private readonly dataSourceService: SampleSourcesDatasourceService,
    private readonly cdr: ChangeDetectorRef
  ) {
    super(router, activatedRoute, messageBus, featureName, store);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.store
      .select(SampleSourcesState.selectedSampleSource)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(x => {
        this.sampleSource = x ?? { name: '', specimens: [] };
        this.cdr.detectChanges();
        this.cdr.detectChanges();
      });
  }
}
