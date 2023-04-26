import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { LayoutStateModel } from './layout-state.model';
import { SetActiveMenu, ShowFullMenu, ToggleMenu } from './layout.actions';

@State<LayoutStateModel>({
  name: 'layout_settings',
  defaults: {
    compactSidebar: true,
    activeMenuTab: 1,
  },
})
@Injectable()
export class LayoutState {
  @Selector()
  static compactMenu(state: LayoutStateModel): boolean {
    return state.compactSidebar;
  }

  @Selector()
  static activeMenuTab(state: LayoutStateModel): number | undefined {
    return state.activeMenuTab;
  }

  @Action(ToggleMenu)
  toggleMenuView(ctx: StateContext<LayoutStateModel>): void {
    const current = ctx.getState().compactSidebar;
    ctx.patchState({
      compactSidebar: !current,
    });
  }

  @Action(SetActiveMenu)
  setActiveMenu(
    ctx: StateContext<LayoutStateModel>,
    action: SetActiveMenu
  ): void {
    ctx.patchState({
      activeMenuTab: action.index,
    });
  }

  @Action(ShowFullMenu)
  showMenu(ctx: StateContext<LayoutStateModel>, action: ShowFullMenu): void {
    ctx.patchState({
      compactSidebar: !action.show,
    });
  }
}
