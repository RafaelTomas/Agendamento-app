import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-modal',
  imports: [DynamicDialogModule, ButtonModule, DialogModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input({ required: true }) header!: string;
  @Input({ required: true }) visible!: boolean;
  @Output() close = new EventEmitter<boolean>();

  closeModal(value: boolean) {
    this.close.emit(value);
  }

}
