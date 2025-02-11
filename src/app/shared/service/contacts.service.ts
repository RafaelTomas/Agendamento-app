import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Contatcs } from '../types/contacts.types';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  apiUrl: string = `http://localhost:8080/contatos`
  constructor(private httpClient: HttpClient) {}

  getContacts(): Observable<any>{
     return this.httpClient.get<any>(this.apiUrl + `/${localStorage.getItem('userId')}`);
  }

  postContact(data: Contatcs){
    return this.httpClient.post(this.apiUrl + `/${localStorage.getItem('userId')}`, data);
  }
  putContact(data: Contatcs){
    return this.httpClient.put(this.apiUrl + `/usuario/${localStorage.getItem('userId')}/contato/${data.id}`, data);
  }

  deleteContact(id: number){
    return this.httpClient.put(this.apiUrl + `/usuario/${localStorage.getItem('userId')}/deletar/${id}`, {});
  }


}
