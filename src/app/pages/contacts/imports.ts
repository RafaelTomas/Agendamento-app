import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
    imports: [
        CommonModule, HeaderComponent,ModalComponent,ToggleButtonModule,FontAwesomeModule,DialogModule ,TableModule, IconFieldModule,ButtonModule,DynamicDialogModule, InputTextModule, InputIconModule
    ],
    exports: [
        CommonModule, HeaderComponent,ModalComponent,ToggleButtonModule,FontAwesomeModule,DialogModule ,TableModule, IconFieldModule,ButtonModule,DynamicDialogModule, InputTextModule, InputIconModule
    ]
})
export class ImportsModule {}