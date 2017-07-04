import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MaterialAppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MaterialAppModule);


// import {platformBrowser} from '@angular/platform-browser';
// import {MaterialAppModuleNgFactory} from './aot/app/app.module.ngfactory';
// platformBrowser().bootstrapModuleFactory(MaterialAppModuleNgFactory);
