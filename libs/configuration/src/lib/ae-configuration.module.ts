import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AE_APP_CONFIG_FILE_PATH } from '@ae-labs/core';
import { ConfigurationService } from './services/configuration.service';
import { ConfigurationState } from './store/configuration.state';

function initializeApp(configService: ConfigurationService) {
  return () => configService.load();
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([ConfigurationState]),
  ],
  providers: [
    ConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigurationService, AE_APP_CONFIG_FILE_PATH],
      multi: true,
    },
  ],
})
export class AeConfigurationModule {
  constructor(@Optional() @SkipSelf() parentModule?: AeConfigurationModule) {
    if (parentModule) {
      throw new Error(
        'AeConfigurationModule has already been loaded. Please import it only once in the application module.'
      );
    }
  }
}
