import {
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialIconsService } from './services';

const registerMaterialIcons = (materialIconsService: MaterialIconsService) => {
    return () => materialIconsService.registerIcons();
};

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    providers: [
        MaterialIconsService,
        {
            provide: APP_INITIALIZER,
            useFactory: registerMaterialIcons,
            deps: [
                MaterialIconsService
            ],
            multi: true
        },
    ]
})
export class SharedModule { }
