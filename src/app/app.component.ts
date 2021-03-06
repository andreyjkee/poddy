import { ChangeDetectorRef, Component, Inject } from '@angular/core';

import { TAB_ID } from './tab-id.injector';

@Component({
  selector: 'app-poddy',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly tabId = this._tabId;
  message: string;

  constructor(@Inject(TAB_ID) private _tabId: number, private changeDetector: ChangeDetectorRef) {}

  onClick(): void {
    chrome.tabs.sendMessage(this._tabId, 'request', message => {
      this.message = message;
      if (chrome.runtime.lastError) {
        this.message = `The current page is protected by the browser, try another webpage..`;
      }
      this.changeDetector.detectChanges();
    });
  }
}
