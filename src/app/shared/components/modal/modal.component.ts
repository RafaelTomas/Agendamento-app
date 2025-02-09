import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-modal',
  imports: [
    CommonModule,
    DynamicDialogModule,
    ButtonModule,
    DialogModule,
    ToggleButtonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit, OnChanges {
  @Input({ required: true }) header!: string;
  @Input({ required: true }) visible!: boolean;
  @Input() parentData!: any;
  @Output() close = new EventEmitter<boolean>();
  @Output() formData = new EventEmitter<any>();
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parentData']) {
      this.form?.setValue(this.parentData);
    }
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      nome: new FormControl('', [
        Validators.required,
        Validators.maxLength(70),
      ]),
      celular: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
      ]),
      telefone: new FormControl('', [Validators.maxLength(9)]),
      sn_favorito: new FormControl('N'),
      sn_ativo: new FormControl('S'),
      dh_cad: new FormControl(''),
    });
  }

  closeModal(value: boolean) {
    this.close.emit(value);
    this.form.reset();
  }

  submitData() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.formData.emit();
      this.closeModal(false);
    }
  }
}
