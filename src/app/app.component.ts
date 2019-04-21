import { ChangeDetectorRef, Component, Inject } from '@angular/core';

import { TAB_ID } from './tab-id.injector';
import { MatSidenav } from '@angular/material';
import { FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: 'app-poddy',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string;
  sidenav: MatSidenav;
  searchFieldControl: FormControl;

  constructor(@Inject(TAB_ID) private tabId: number,
              private changeDetector: ChangeDetectorRef,
              private formBuilder: FormBuilder) {
    this.searchFieldControl = this.formBuilder.control('');
  }

  onClick(): void {
    chrome.tabs.sendMessage(this.tabId, 'request', message => {
      this.message = message;
      if (chrome.runtime.lastError) {
        this.message = `The current page is protected by the browser, try another webpage..`;
      }
      this.changeDetector.detectChanges();
    });
  }

  handleSearchFieldClick(): void {
    console.log(this.searchFieldControl.value)
  }

}
