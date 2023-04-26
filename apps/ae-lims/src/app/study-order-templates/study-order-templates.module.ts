import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LimsApiConfiguration, LimsApiModule } from '@ae-labs/apis/lims';
import { NgxsModule, Store } from '@ngxs/store';
import { I18NextModule } from 'angular-i18next';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
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
import { StudyOrderTemplateCardComponent } from './components/study-order-template-card/study-order-template-card.component';
import { StudyOrderTemplateDetailsViewComponent } from './components/study-order-template-details-view/study-order-template-details-view.component';
import { StudyOrderTemplateOrderDefinitionListComponent } from './components/study-order-template-order-definition-list/study-order-template-order-definition-list.component';
import { StudyOrderTemplateOrderDefinitionListItemComponent } from './components/study-order-template-order-definition-list-item/study-order-template-order-definition-list-item.component';
import { StudyOrderTemplateResultListComponent } from './components/study-order-template-result-list/study-order-template-result-list.component';
import { StudyOrderTemplateResultListItemComponent } from './components/study-order-template-result-list-item/study-order-template-result-list-item.component';
import { StudyOrderTemplateResultListItemGridComponent } from './components/study-order-template-result-list-item-grid/study-order-template-result-list-item-grid.component';
import { StudyOrderTemplateSampleSourceListComponent } from './components/study-order-template-sample-source-list/study-order-template-sample-source-list.component';
import { StudyOrderTemplateSampleSourceListItemComponent } from './components/study-order-template-sample-source-list-item/study-order-template-sample-source-list-item.component';
import { StudyOrderTemplatesListComponent } from './components/study-order-templates-list/study-order-templates-list.component';
import { StudyOrderTemplatesPageComponent } from './pages/study-order-templates-list/study-order-templates-page.component';
import { StudyOrderTemplatesDatasourceService } from './services/study-order-templates-datasource.service';
import { StudyOrderTemplatesState } from './store/study-order-templates.state';
import { StudyOrderTemplatesRoutingModule } from './study-order-templates-routing.module';

@NgModule({
  declarations: [
    StudyOrderTemplatesPageComponent,
    StudyOrderTemplatesListComponent,
    StudyOrderTemplateCardComponent,
    StudyOrderTemplateDetailsViewComponent,
    StudyOrderTemplateOrderDefinitionListComponent,
    StudyOrderTemplateOrderDefinitionListItemComponent,
    StudyOrderTemplateSampleSourceListComponent,
    StudyOrderTemplateSampleSourceListItemComponent,
    StudyOrderTemplateResultListComponent,
    StudyOrderTemplateResultListItemComponent,
    StudyOrderTemplateResultListItemGridComponent,
  ],
  imports: [
    CommonModule,
    StudyOrderTemplatesRoutingModule,
    NgxsModule.forFeature([StudyOrderTemplatesState]),
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
    CheckboxModule,
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
    { provide: AE_FEATURE_NAME, useValue: `AeStudyOrderTemplate` },
    StudyOrderTemplatesDatasourceService,
  ],
})
export class StudyOrderTemplatesModule {}
