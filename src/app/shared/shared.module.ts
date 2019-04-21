import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialIconsService } from './services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const registerMaterialIcons = (materialIconsService: MaterialIconsService) => {
    return () => materialIconsService.registerIcons();
};

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        ReactiveFormsModule
    ],
    exports: [
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        ReactiveFormsModule
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
