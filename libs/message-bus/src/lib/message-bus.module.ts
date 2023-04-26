import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { MessageBusService } from './services/message-bus.service';

@NgModule({
  imports: [CommonModule],
  providers: [],
})
export class MessageBusModule {
  static forRoot(): ModuleWithProviders<MessageBusModule> {
    return {
      ngModule: MessageBusModule,
      providers: [MessageBusService],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: MessageBusModule) {
    if (parentModule) {
      throw new Error(
        'MessageBusModule has already been loaded. Please import it only once in the application module.'
      );
    }
  }
}
