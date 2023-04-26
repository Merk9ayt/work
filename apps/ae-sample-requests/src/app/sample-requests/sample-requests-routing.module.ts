import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleRequestsComponent } from './pages/sample-requests/sample-requests.component';

const routes: Routes = [
  {
    path: '',
    component: SampleRequestsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRequestsRoutingModule { }
