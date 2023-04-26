import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AeI18nModule } from '@ae-lib/i18n';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { AeAuthModule } from '@ae-labs/auth';
import { AeConfigurationModule } from '@ae-labs/configuration';
import {
  AE_APP_CONFIG_FILE_PATH,
  AeErrorHandlerService,
  PendingChangesGuard,
} from '@ae-labs/core';
import { MessageBusModule } from '@ae-labs/messaging';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    // core
    BrowserModule,
    BrowserAnimationsModule,
    // external
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    NgxsStoragePluginModule.forRoot({
      key: ['layout_settings', 'auth.token'],
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      name: 'AELabs',
      disabled: environment.production,
    }),
    // internal
    AeAuthModule.forRoot(environment.identity),
    AeConfigurationModule,
    MessageBusModule.forRoot(),
    AeI18nModule.forRoot(),
    // local
    AppRoutingModule,
    LayoutModule,
    ToastModule,
  ],
  providers: [
    {
      provide: AE_APP_CONFIG_FILE_PATH,
      useValue: `assets/configs/config.${environment.name}.json`,
    },
    ConfirmationService,
    MessageService,
    PendingChangesGuard,
    DialogService,
    {
      provide: ErrorHandler,
      useClass: AeErrorHandlerService,
    },
  ],
})
export class AppModule {}
