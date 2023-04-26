import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import {AE_APP_CONFIG_FILE_PATH} from "@ae-labs/core";
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
  ],
  providers: [
    { provide: AE_APP_CONFIG_FILE_PATH, useValue: `assets/configs/config.json` },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
