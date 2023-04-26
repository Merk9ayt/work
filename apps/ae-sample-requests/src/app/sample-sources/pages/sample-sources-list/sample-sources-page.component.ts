import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, takeUntil } from 'rxjs';
import { AeBaseComponent, AeFormMode } from '@ae-labs/ui';
import { SampleSourceModel } from '../../models/sample-source.model';
import { LoadSampleSources } from '../../store/sample-sources-state.actions';
import { SampleSourcesState } from '../../store/sample-sources.state';

@Component({
  selector: 'ae-lims-sample-sources-page',
  templateUrl: './sample-sources-page.component.html',
  styleUrls: ['./sample-sources-page.component.scss'],
})
export class SampleSourcesPageComponent
  extends AeBaseComponent
  implements OnInit
{
  sampleSources$: Observable<SampleSourceModel[]> | undefined;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.sampleSources$ = this.store
      .select(SampleSourcesState.sampleSourcesList)
      .pipe(takeUntil(this.destroyed$));

    this.store.dispatch(LoadSampleSources);
  }

  sampleSourceSelect(sampleSource: SampleSourceModel): void {
    this.router
      .navigate([sampleSource.id, AeFormMode.View], {
        relativeTo: this.activatedRoute,
      })
      .then();
  }

  sampleSourceCreate(sampleSource?: SampleSourceModel): void {
    this.router
      .navigate(['new', AeFormMode.Create], {
        relativeTo: this.activatedRoute,
      })
      .then();
  }
}
