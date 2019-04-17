import { ChangeDetectorRef, Component, Inject } from '@angular/core';

import { TAB_ID } from './tab-id.injector';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-poddy',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string;
  sidenav: MatSidenav;

  constructor(@Inject(TAB_ID) private tabId: number, private changeDetector: ChangeDetectorRef) {}

  onClick(): void {
    chrome.tabs.sendMessage(this.tabId, 'request', message => {
      this.message = message;
      if (chrome.runtime.lastError) {
        this.message = `The current page is protected by the browser, try another webpage..`;
      }
      this.changeDetector.detectChanges();
    });
  }
}
