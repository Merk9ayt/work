import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AeI18nModule } from '@ae-lib/i18n';
import { NgxsModule } from '@ngxs/store';
import { AeConfigurationModule } from '@ae-labs/configuration';
import { AE_APP_CONFIG_FILE_PATH } from '@ae-labs/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectSelectComponent } from './subjects/components/subject-select/subject-select.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    AeI18nModule.forRoot(),
    AeConfigurationModule,
    SubjectSelectComponent,
  ],
  providers: [
    {
      provide: AE_APP_CONFIG_FILE_PATH,
      useValue: `assets/configs/config.json`,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
