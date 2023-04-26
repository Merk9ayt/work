import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import { MenuItem } from 'primeng/api';
import { takeUntil } from 'rxjs';
import {
  ApplicationDefinition,
  ConfigurationState,
} from '@ae-labs/configuration';
import { AeBaseComponent } from '@ae-labs/ui';
import { flattenApplications } from '../../../utils/app-definition-utils';
import {
  LayoutState,
  SetActiveMenu,
  ShowFullMenu,
  ToggleMenu,
} from '../../store';

@Component({
  selector: 'ae-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutSidebarComponent extends AeBaseComponent implements OnInit {
  compactView = true;

  activeTab?: number;

  menuItems: MenuItem[] = [];

  constructor(
    private readonly store: Store,
    @Inject(I18NEXT_SERVICE)
    private readonly translationService: ITranslationService,
    private readonly cdr: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.store
      .select(LayoutState.compactMenu)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(isCompact => (this.compactView = isCompact));

    this.store
      .select(LayoutState.activeMenuTab)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(x => (this.activeTab = x));

    this.store
      .select(ConfigurationState.applications)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(apps => {
        this.generateMenu(apps);
      });
  }

  onMenuItemClicked(event: Event, index: number): void {
    event.preventDefault();

    const targetHasSubItems = !!this.menuItems[index].items;
    if (this.activeTab === index) {
      this.store.dispatch(new SetActiveMenu(undefined));
      if (targetHasSubItems) {
        this.store.dispatch(new ToggleMenu());
      }
    } else {
      this.store.dispatch([
        new SetActiveMenu(index),
        new ShowFullMenu(targetHasSubItems),
      ]);
    }
  }

  private generateMenu(apps: ApplicationDefinition[]): void {
    const namespaces = flattenApplications(apps)
      .filter(app => !!app.i18nextNamespaces)
      .reduce(
        (prev, current) =>
          prev.concat(
            /* eslint-disable @typescript-eslint/no-non-null-assertion */
            Array.isArray(current.i18nextNamespaces)
              ? current.i18nextNamespaces!
              : [current.i18nextNamespaces!]
            /* eslint-enable @typescript-eslint/no-non-null-assertion */
          ),
        [] as string[]
      );
    this.translationService.loadNamespaces(namespaces).then(() => {
      this.menuItems = apps.map(x =>
        this.mapApplicationDefinitionToMenuItem(x)
      );
      this.cdr.detectChanges();
    });
  }

  private mapApplicationDefinitionToMenuItem(
    app: ApplicationDefinition
  ): MenuItem {
    return {
      label:
        (app.displayNameKey
          ? this.translationService.t(app.displayNameKey)
          : app.displayName) ?? undefined,
      icon: app.icon?.join(' '),
      routerLink: app.routePath,
      queryParams: app.queryParams,
      items: app.children?.map(x => this.mapApplicationDefinitionToMenuItem(x)),
    };
  }
}
