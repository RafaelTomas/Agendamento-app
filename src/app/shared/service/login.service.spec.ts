import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { LoginResponse } from '../types/login.types';
import { provideHttpClient } from '@angular/common/http';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  const mockResponse: LoginResponse = {
    token: 'mockToken123',
    id: 'mockUserId'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
    localStorage.clear();
  });

  afterEach(() => {

    httpMock.verify();
  });

  it('deve realizar login e armazenar o token e o userId no localStorage', () => {
    const email = 'test@example.com';
    const password = 'password123';

    service.login(email, password).subscribe(response => {
      expect(response.token).toBe(mockResponse.token);
      expect(response.id).toBe(mockResponse.id);

      expect(localStorage.getItem('token')).toBe(mockResponse.token);
      expect(localStorage.getItem('userId')).toBe(mockResponse.id);
    });

    const req = httpMock.expectOne('http://localhost:8080/auth/login');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});