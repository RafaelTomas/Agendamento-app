import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/service/login.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LoginForm } from '../../shared/types/login.types';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ReactiveFormsModule, ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginService, MessageService]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup<LoginForm>;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService, private messageService: MessageService) { }

  ngOnInit(): void {
      this.createForm();
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: () =>{
          this.messageService.add({ severity: 'success', summary: 'Você foi logado' })
          this.router.navigate(['/contatos']);
        },
        error: () => this.messageService.add({ severity: 'error', summary: 'Erro inesperado' })
      })

    } else {
      console.error('Formulário inválido');
    }
  }
}
