import { AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {
  SampleRequestsApiConfiguration,
  SampleRequestsApiModule,
} from '@ae-labs/apis/sample-requests';
import { NgxsModule, Store } from '@ngxs/store';
import { I18NextModule } from 'angular-i18next';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { SplitterModule } from 'primeng/splitter';
import { ConfigurationState } from '@ae-labs/configuration';
import { AE_FEATURE_NAME } from '@ae-labs/core';
import { SampleSourceCardComponent } from './components/sample-source-card/sample-source-card.component';
import { SampleSourceDetailsEditComponent } from './components/sample-source-details-edit/sample-source-details-edit.component';
import { SampleSourceDetailsViewComponent } from './components/sample-source-details-view/sample-source-details-view.component';
import { SampleSourceSpecimenItemViewComponent } from './components/sample-source-specimen-item-view/sample-source-specimen-item-view.component';
import { SampleSourceSpecimensListComponent } from './components/sample-source-specimens-list/sample-source-specimens-list.component';
import { SampleSourcesListComponent } from './components/sample-sources-list/sample-sources-list.component';
import { SampleSourcesPageComponent } from './pages/sample-sources-list/sample-sources-page.component';
import { SampleSourcesRoutingModule } from './sample-sources-routing.module';
import { SampleSourcesDatasourceService } from './services/sample-sources-datasource.service';
import { SampleSourcesState } from './store/sample-sources.state';

@NgModule({
  declarations: [
    SampleSourcesPageComponent,
    SampleSourceCardComponent,
    SampleSourceDetailsEditComponent,
    SampleSourceDetailsViewComponent,
    SampleSourcesListComponent,
    SampleSourceSpecimensListComponent,
    SampleSourceSpecimenItemViewComponent,
  ],
  imports: [
    RouterOutlet,
    SplitterModule,
    ListboxModule,
    AsyncPipe,
    CardModule,
    I18NextModule,
    DividerModule,
    PanelModule,
    ReactiveFormsModule,
    SampleSourcesRoutingModule,
    SampleRequestsApiModule,
    NgxsModule.forFeature([SampleSourcesState]),
    ButtonModule,
    DataViewModule,
    RippleModule,
  ],
  providers: [
    {
      provide: SampleRequestsApiConfiguration,
      useFactory: (store: Store) => {
        const result = store.selectSnapshot(
          ConfigurationState.service('sample-requests')
        );
        const rootUrl = result?.url ?? 'xxx';
        return { rootUrl };
      },
      deps: [Store],
    },
    { provide: AE_FEATURE_NAME, useValue: `AeSampleSources` },
    SampleSourcesDatasourceService,
  ],
})
export class SampleSourcesModule {}
