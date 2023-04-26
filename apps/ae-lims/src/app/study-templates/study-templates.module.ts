import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LimsApiConfiguration, LimsApiModule } from '@ae-labs/apis/lims';
import { NgxsModule, Store } from '@ngxs/store';
import { I18NextModule } from 'angular-i18next';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule } from 'primeng/dataview';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfigurationState } from '@ae-labs/configuration';
import { AE_FEATURE_NAME } from '@ae-labs/core';
import { StudyTemplateCardComponent } from './components/study-template-card/study-template-card.component';
import { StudyTemplateDetailsEditComponent } from './components/study-template-details-edit/study-template-details-edit.component';
import { StudyTemplateDetailsViewComponent } from './components/study-template-details-view/study-template-details-view.component';
import { StudyTemplateResultDefinitionDigitalEditComponent } from './components/study-template-result-definition-digital-edit/study-template-result-definition-digital-edit.component';
import { StudyTemplateResultDefinitionDigitalViewComponent } from './components/study-template-result-definition-digital-view/study-template-result-definition-digital-view.component';
import { StudyTemplateResultDefinitionEditComponent } from './components/study-template-result-definition-edit/study-template-result-definition-edit.component';
import { StudyTemplateResultDefinitionListComponent } from './components/study-template-result-definition-list/study-template-result-definition-list.component';
import { StudyTemplateResultDefinitionListItemViewComponent } from './components/study-template-result-definition-list-item-view/study-template-result-definition-list-item-view.component';
import { StudyTemplateResultDefinitionViewComponent } from './components/study-template-result-definition-view/study-template-result-definition-view.component';
import { StudyTemplateResultPrecisionEditComponent } from './components/study-template-result-precision-edit/study-template-result-precision-edit.component';
import { StudyTemplateResultPrecisionListComponent } from './components/study-template-result-precision-list/study-template-result-precision-list.component';
import { StudyTemplateResultPrecisionListItemViewComponent } from './components/study-template-result-precision-list-item-view/study-template-result-precision-list-item-view.component';
import { StudyTemplateSampleItemEditComponent } from './components/study-template-sample-item-edit/study-template-sample-item-edit.component';
import { StudyTemplateSampleListComponent } from './components/study-template-sample-list/study-template-sample-list.component';
import { StudyTemplateSampleListItemViewComponent } from './components/study-template-sample-list-item-view/study-template-sample-list-item-view.component';
import { StudyTemplateVersionViewComponent } from './components/study-template-version-view/study-template-version-view.component';
import { StudyTemplatesListComponent } from './components/study-templates-list/study-templates-list.component';
import { StudyTemplatesPageComponent } from './pages/study-templates-list/study-templates-page.component';
import { StudyTemplatesDatasourceService } from './services/study-templates-datasource.service';
import { StudyTemplatesState } from './store/study-templates.state';
import { StudyTemplatesRoutingModule } from './study-templates-routing.module';

@NgModule({
  declarations: [
    StudyTemplatesPageComponent,
    StudyTemplateCardComponent,
    StudyTemplatesListComponent,
    StudyTemplateDetailsViewComponent,
    StudyTemplateDetailsEditComponent,
    StudyTemplateVersionViewComponent,
    StudyTemplateSampleItemEditComponent,
    StudyTemplateResultPrecisionEditComponent,
    StudyTemplateResultDefinitionEditComponent,
    StudyTemplateResultDefinitionDigitalEditComponent,
    StudyTemplateResultPrecisionListComponent,
    StudyTemplateResultPrecisionListItemViewComponent,
    StudyTemplateSampleListComponent,
    StudyTemplateResultDefinitionListComponent,
    StudyTemplateSampleListItemViewComponent,
    StudyTemplateResultDefinitionListItemViewComponent,
    StudyTemplateResultDefinitionViewComponent,
    StudyTemplateResultDefinitionDigitalViewComponent,
  ],
  imports: [
    CommonModule,
    StudyTemplatesRoutingModule,
    NgxsModule.forFeature([StudyTemplatesState]),
    ReactiveFormsModule,
    ListboxModule,
    DividerModule,
    CardModule,
    ButtonModule,
    LimsApiModule,
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
    TabViewModule,
    InputNumberModule,
    DataViewModule,
  ],
  providers: [
    {
      provide: LimsApiConfiguration,
      useFactory: (store: Store) => {
        const result = store.selectSnapshot(ConfigurationState.service('lims'));
        const rootUrl = result?.url ?? 'xxx';
        return { rootUrl };
      },
      deps: [Store],
    },
    { provide: AE_FEATURE_NAME, useValue: `AeStudyTemplate` },
    StudyTemplatesDatasourceService,
  ],
})
export class StudyTemplatesModule {}
