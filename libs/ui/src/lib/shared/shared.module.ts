import { NgModule } from '@angular/core';
import { RerenderDirective } from './rerender.directive';

@NgModule({
  declarations: [RerenderDirective],
  exports: [RerenderDirective],
  imports: [],
})
export class SharedModule {}
