import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { ModalComponent } from './modal.component';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';


describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        ButtonModule,
        ToggleButtonModule,
        DialogModule,
        DynamicDialogModule,
        NgxMaskDirective
      ],
      providers: [FormBuilder, provideNgxMask()],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar o formulário no ngOnInit', () => {
    component.ngOnInit();
    expect(component.form).toBeDefined();
    expect(component.form.contains('email')).toBeTrue();
    expect(component.form.contains('nome')).toBeTrue();
    expect(component.form.contains('celular')).toBeTrue();
    expect(component.form.contains('telefone')).toBeTrue();
    expect(component.form.contains('sn_favorito')).toBeTrue();
    expect(component.form.contains('sn_ativo')).toBeTrue();
    expect(component.form.contains('dh_cad')).toBeTrue();
  });

  it('deve atualizar o formulário quando parentData mudar', () => {
    const mockData = {
      id: '1',
      email: 'test@example.com',
      nome: 'Test User',
      celular: '1234567890',
      telefone: '987654321',
      sn_favorito: 'S',
      sn_ativo: 'N',
      dh_cad: '2023-10-01',
    };

    component.parentData = mockData;
    component.ngOnChanges({
      parentData: {
        currentValue: mockData,
        previousValue: null,
        firstChange: false,
        isFirstChange: () => false,
      },
    });

    expect(component.form.value).toEqual(mockData);
  });

  it('deve emitir evento de fechamento ao chamar closeModal', () => {
    spyOn(component.close, 'emit');
    component.closeModal(true);
  });

  it('deve emitir formData e fechar o modal ao chamar submitData com formulário válido', () => {
    spyOn(component.formData, 'emit');
    spyOn(component, 'closeModal');

    component.ngOnInit();
    component.form.setValue({
      id: '1',
      email: 'test@example.com',
      nome: 'Test User',
      celular: '1234567890',
      telefone: '987654321',
      sn_favorito: 'S',
      sn_ativo: 'N',
      dh_cad: '2023-10-01',
    });

    component.submitData();

    expect(component.formData.emit).toHaveBeenCalled();
    expect(component.closeModal).toHaveBeenCalledWith(false);
  });

  it('não deve emitir formData ao chamar submitData com formulário inválido', () => {
    spyOn(component.formData, 'emit');
    spyOn(component, 'closeModal');

    component.ngOnInit();
    component.form.setValue({
      id: '',
      email: '',
      nome: '',
      celular: '',
      telefone: '',
      sn_favorito: 'N',
      sn_ativo: 'S',
      dh_cad: '',
    });

    component.submitData();

    expect(component.formData.emit).not.toHaveBeenCalled();
    expect(component.closeModal).not.toHaveBeenCalled();
  });
});