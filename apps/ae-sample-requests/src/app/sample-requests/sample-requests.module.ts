import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ScrollerModule } from 'primeng/scroller';
import { TaskBoardModule } from '@ae-labs/ui';
import { SampleRequestsComponent } from './pages/sample-requests/sample-requests.component';
import { SampleRequestsRoutingModule } from './sample-requests-routing.module';
import { SampleRequestsState } from './store/sample-requests.state';

@NgModule({
  declarations: [SampleRequestsComponent],
  imports: [
    CommonModule,
    SampleRequestsRoutingModule,
    NgxsModule.forFeature([SampleRequestsState]),
    TaskBoardModule,
    PanelModule,
    CardModule,
    ScrollerModule,
  ],
})
export class SampleRequestsModule {}
