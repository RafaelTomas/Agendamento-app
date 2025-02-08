import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-modal',
  imports: [
    CommonModule,
    DynamicDialogModule,
    ButtonModule,
    DialogModule,
    ToggleButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  @Input({ required: true }) header!: string;
  @Input({ required: true }) visible!: boolean;
  @Output() close = new EventEmitter<boolean>();
  @Output() formData = new EventEmitter<any>();
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

   createForm(){
      this.form = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        nome: new FormControl('', [Validators.required, Validators.maxLength(70)]),
        celular: new FormControl('', [Validators.required, Validators.maxLength(15)]),
        telefone: new FormControl('', [Validators.maxLength(9)]),
        sn_favorito: new FormControl('N'),
        sn_ativo: new FormControl('S'),
      });
    }


  closeModal(value: boolean) {
    this.close.emit(value);
  }

  submitData() {
    if(this.form.valid){
      this.formData.emit();
      this.closeModal(false)
      console.log(this.form.value)
    }
  }

  updateFavorite(event: any){
    this.form.controls['sn_favorito'].setValue(event.checked ? 'S' : 'N');
    console.log(this.form.controls['sn_favorito'].value)
  }
}
