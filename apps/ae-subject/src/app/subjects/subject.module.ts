import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  SubjectApiConfiguration,
  SubjectApiModule,
} from '@ae-labs/apis/subject';
import { NgxsModule, Store } from '@ngxs/store';
import { I18NextModule } from 'angular-i18next';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitterModule } from 'primeng/splitter';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfigurationState } from '@ae-labs/configuration';
import { AE_FEATURE_NAME } from '@ae-labs/core';
import { SubjectCardComponent } from './components/subject-card/subject-card.component';
import { SubjectDetailsEditComponent } from './components/subject-details-edit/subject-details-edit.component';
import { SubjectDetailsViewComponent } from './components/subject-details-view/subject-details-view.component';
import { SubjectsListComponent } from './components/subjects-list/subjects-list.component';
import { SubjectsPageComponent } from './pages/subjects-list/subjects-page.component';
import { SubjectDatasourceService } from './services/subject-datasource.service';
import { SubjectState } from './store/subject.state';
import { SubjectRoutingModule } from './subject-routing.module';

@NgModule({
  declarations: [
    SubjectsPageComponent,
    SubjectsListComponent,
    SubjectCardComponent,
    SubjectDetailsViewComponent,
    SubjectDetailsEditComponent,
    // SubjectSelectComponent,
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    NgxsModule.forFeature([SubjectState]),
    ReactiveFormsModule,
    ListboxModule,
    DividerModule,
    CardModule,
    ButtonModule,
    SubjectApiModule,
    PanelModule,
    FormsModule,
    ScrollPanelModule,
    SplitterModule,
    TieredMenuModule,
    SpeedDialModule,
    ToolbarModule,
    InputTextModule,
    InputTextareaModule,
    MenuModule,
    ConfirmDialogModule,
    ToastModule,
    DropdownModule,
    I18NextModule,
  ],
  providers: [
    {
      provide: SubjectApiConfiguration,
      useFactory: (store: Store) => {
        const result = store.selectSnapshot(
          ConfigurationState.service('subject')
        );
        const rootUrl = result?.url ?? 'xxx';
        return { rootUrl };
      },
      deps: [Store],
    },
    { provide: AE_FEATURE_NAME, useValue: `AeSubject` },
    SubjectDatasourceService,
  ],
  exports: [
    SubjectsListComponent,
    // SubjectSelectComponent
  ],
})
export class SubjectModule {}
