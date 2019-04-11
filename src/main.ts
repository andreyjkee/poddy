import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { TAB_ID } from './app/tab-id.injector';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}
if (chrome.tabs) {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {


    const tab = [...tabs].pop();
    const { id: tabId } = tab;

    // provides the current Tab ID so you can send messages to the content page
    platformBrowserDynamic([{ provide: TAB_ID, useValue: tabId }])
        .bootstrapModule(AppModule)
        .catch(error => console.error(error));
  });
} else {
  platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
}
