import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../../ae-subject/src/app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
