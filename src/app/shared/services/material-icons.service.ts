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
    this.matIconRegistry.addSvgIcon(
      'menu',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/outline-menu.svg')
    );
  }
}
