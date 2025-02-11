import { TestBed } from '@angular/core/testing';
import {  HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ContactsService } from './contacts.service';
import { Contatcs } from '../types/contacts.types';
import { provideHttpClient } from '@angular/common/http';

describe('ContactsService', () => {
  let service: ContactsService;
  let httpMock: HttpTestingController;

  const mockUserId = 'mockUserId123';
  const mockContactsUrl = `http://localhost:8080/contatos/${mockUserId}`;
  const mockContact: Contatcs = {
      id: "1",
      nome: 'John Doe',
      telefone: '123456789',
      email: 'john@example.com',
      celular: '81996713939',
      favorito: 'S'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ContactsService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(ContactsService);
    httpMock = TestBed.inject(HttpTestingController);

    // Simula o localStorage com um userId
    spyOn(localStorage, 'getItem').withArgs('userId').and.returnValue(mockUserId);
  });

  afterEach(() => {
    // Verifica se não há requisições HTTP pendentes
    httpMock.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar contatos', () => {
    const mockContacts = [mockContact];

    service.getContacts().subscribe(contacts => {
      expect(contacts).toEqual(mockContacts);
    });

    const req = httpMock.expectOne(mockContactsUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockContacts);
  });

  it('deve adicionar um contato', () => {
    service.postContact(mockContact).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(mockContactsUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockContact);
    req.flush({});
  });

  it('deve atualizar um contato', () => {
    const updateUrl = `http://localhost:8080/contatos/usuario/${mockUserId}/contato/${mockContact.id}`;

    service.putContact(mockContact).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(updateUrl);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(mockContact);
    req.flush({});
  });

  it('deve deletar um contato', () => {
    const deleteUrl = `http://localhost:8080/contatos/usuario/${mockUserId}/deletar/${mockContact.id}`;

    service.deleteContact(mockContact.id).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(deleteUrl);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual({});
    req.flush({});
  });
});
