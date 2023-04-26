import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {firstValueFrom} from 'rxjs';
import {AE_APP_CONFIG_FILE_PATH} from "@ae-labs/core";
import {Configuration} from '../models/configuration';
import {SetApplications, SetServices} from '../store/configuration.actions';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store,
    @Inject(AE_APP_CONFIG_FILE_PATH) private readonly configPath: string
  ) {
  }

  async load(): Promise<void> {
    try {
      const configuration = (await firstValueFrom(
        this.httpClient.get(this.configPath),
        {
          defaultValue: {
            applications: [],
            services: {},
          },
        }
      )) as Configuration;

      this.store.dispatch([
        new SetApplications(configuration.applications),
        new SetServices(configuration.services),
      ]);
    } catch {
      this.store.dispatch([new SetApplications([]), new SetServices({})]);
    }
  }
}
