import {
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule
} from '@angular/material';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatListModule
    ]
})
export class SharedModule { }
