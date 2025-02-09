import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';

import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('Deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar o formulário corretamente', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.get('email')).toBeDefined();
    expect(component.loginForm.get('password')).toBeDefined();
  });

  it('deve navegar para /contatos em caso de login bem-sucedido', fakeAsync(() => {
    const navigateSpy = spyOn(router, 'navigate');
    component.loginForm.setValue({
      email: 'test@example.com',
      password: 'password123',
    });
    component.login();
    tick();

    expect(navigateSpy).toHaveBeenCalledWith(['/contatos']);
  }));

  it('deve exibir erro no console para formulário inválido', () => {
    const consoleErrorSpy = spyOn(console, 'error');
    component.login();
    expect(consoleErrorSpy).toHaveBeenCalledWith('Formulário inválido');
  });

    it('deve chamar o login ao clicar no botão', () => {
        const loginSpy = spyOn(component, 'login');
        const loginButton = fixture.debugElement.query(By.css('button[type="submit"]'));
        loginButton.nativeElement.click();
        expect(loginSpy).toHaveBeenCalled();
    });

    it('deve exigir email', () => {
        const emailControl = component.loginForm.get('email');
        emailControl?.setValue('');
        expect(emailControl?.valid).toBeFalsy();
        expect(emailControl?.errors?.['required']).toBeTruthy();
    });

      it('deve exigir a senha', () => {
        const passwordControl = component.loginForm.get('password');
        passwordControl?.setValue('');
        expect(passwordControl?.valid).toBeFalsy();
        expect(passwordControl?.errors?.['required']).toBeTruthy();
    });

    it('deve validar o formato do email', () => {
        const emailControl = component.loginForm.get('email');
        emailControl?.setValue('invalid-email');
        expect(emailControl?.valid).toBeFalsy();
        expect(emailControl?.errors?.['email']).toBeTruthy();
    });

    it('deve validar o tamanho mínimo da senha', () => {
        const passwordControl = component.loginForm.get('password');
        passwordControl?.setValue('12345');
        expect(passwordControl?.valid).toBeFalsy();
        expect(passwordControl?.errors?.['minlength']).toBeTruthy();
    });
});