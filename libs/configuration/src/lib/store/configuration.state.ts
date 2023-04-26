import { Injectable } from '@angular/core';
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { ApiServiceDefinition, ApplicationDefinition } from '../models';
import { ConfigurationStateModel } from './configuration-state.model';
import { SetApplications, SetServices } from './configuration.actions';

@State<ConfigurationStateModel>({
  name: 'configuration',
  defaults: {
    applications: [],
    services: {},
  },
})
@Injectable()
export class ConfigurationState {
  @Selector()
  static applications(state: ConfigurationStateModel): ApplicationDefinition[] {
    return state.applications;
  }

  static service(
    name: string
  ): (state: ConfigurationStateModel) => ApiServiceDefinition {
    return createSelector(
      [ConfigurationState],
      (state: ConfigurationStateModel) => {
        return state.services[name];
      }
    );
  }

  @Action(SetApplications)
  setApplications(
    ctx: StateContext<ConfigurationStateModel>,
    action: SetApplications
  ): void {
    ctx.patchState({
      applications: action.apps,
    });
  }

  @Action(SetServices)
  setServices(
    ctx: StateContext<ConfigurationStateModel>,
    action: SetServices
  ): void {
    ctx.patchState({
      services: action.services,
    });
  }
}
