import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MaterialIconsService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  public registerIcons(): void {
    const iconNameToPath = {
      menu: '/assets/images/outline-menu.svg',
      search: '/assets/images/baseline-search.svg'
    };
    Object.entries(iconNameToPath).forEach((entry: [string, string]) => {
      this.matIconRegistry.addSvgIcon(
          entry[0],
          this.domSanitizer.bypassSecurityTrustResourceUrl(entry[1])
      );
    });
  }
}
