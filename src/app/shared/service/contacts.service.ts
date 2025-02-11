import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  apiUrl: string = `http://localhost:8080/contatos`
  constructor(private httpClient: HttpClient) {}

  getContacts(): Observable<any>{
     return this.httpClient.get<any>(this.apiUrl + `/${localStorage.getItem('userId')}`);
  }
//   getContactsLarge() {
//     return Promise.resolve(this.getData());
// }

}
