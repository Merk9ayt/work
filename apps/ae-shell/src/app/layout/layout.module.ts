import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { I18NextModule } from 'angular-i18next';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { CoreModule } from '@ae-labs/core';
import { ApplicationMenuComponent } from './components/application-menu/application-menu.component';
import { ApplicationSubMenuComponent } from './components/application-sub-menu/application-sub-menu.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { LayoutSidebarComponent } from './components/layout-sidebar/layout-sidebar.component';
import { TabMenuContentComponent } from './components/tab-menu-content/tab-menu-content.component';
import { UserProfileMenuComponent } from './components/user-profile-menu/user-profile-menu.component';
import { LayoutState } from './store';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    TabMenuContentComponent,
    UserProfileMenuComponent,
    ApplicationMenuComponent,
    ApplicationSubMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarModule,
    ToolbarModule,
    ButtonModule,
    AvatarModule,
    BadgeModule,
    NgxsModule.forFeature([LayoutState]),
    CoreModule,
    ScrollPanelModule,
    ToastModule,
    ConfirmDialogModule,
    MenuModule,
    SlideMenuModule,
    I18NextModule,
    RippleModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
