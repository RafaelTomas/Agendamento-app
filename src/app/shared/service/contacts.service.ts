import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  getData(){
    return [
      {
        "id": 1,
        "nome": "João da Silva",
        "email": "joao.silva@email.com",
        "celular": "11999999999",
        "telefone": "1133333333",
        "sn_favorito": "S",
        "sn_ativo": "S",
        "dh_cad": "2024-07-25T10:00:00Z"
      },
      {
        "id": 2,
        "nome": "Maria Souza",
        "email": "maria.souza@email.com",
        "celular": "21988888888",
        "telefone": "2122222222",
        "sn_favorito": "N",
        "sn_ativo": "S",
        "dh_cad": "2024-07-25T11:00:00Z"
      },
      {
        "id": 3,
        "nome": "Pedro Oliveira",
        "email": "pedro.oliveira@email.com",
        "celular": "31977777777",
        "telefone": "3144444444",
        "sn_favorito": "S",
        "sn_ativo": "N",
        "dh_cad": "2024-07-25T12:00:00Z"
      },
      {
        "id": 4,
        "nome": "Ana Paula",
        "email": "ana.paula@email.com",
        "celular": "41966666666",
        "telefone": "4155555555",
        "sn_favorito": "N",
        "sn_ativo": "S",
        "dh_cad": "2024-07-25T13:00:00Z"
      },
      {
        "id": 5,
        "nome": "Carlos Santos",
        "email": "carlos.santos@email.com",
        "celular": "51955555555",
        "telefone": "5166666666",
        "sn_favorito": "S",
        "sn_ativo": "S",
        "dh_cad": "2024-07-25T14:00:00Z"
      },
      {
        "id": 6,
        "nome": "Fernanda Rodrigues",
        "email": "fernanda.rodrigues@email.com",
        "celular": "61944444444",
        "telefone": "6177777777",
        "sn_favorito": "N",
        "sn_ativo": "N",
        "dh_cad": "2024-07-25T15:00:00Z"
      },
      {
        "id": 7,
        "nome": "Ricardo Almeida",
        "email": "ricardo.almeida@email.com",
        "celular": "71933333333",
        "telefone": "7188888888",
        "sn_favorito": "S",
        "sn_ativo": "S",
        "dh_cad": "2024-07-25T16:00:00Z"
      },
      {
        "id": 8,
        "nome": "Juliana Silva",
        "email": "juliana.silva@email.com",
        "celular": "81922222222",
        "telefone": "8199999999",
        "sn_favorito": "N",
        "sn_ativo": "S",
        "dh_cad": "2024-07-25T17:00:00Z"
      },
      {
        "id": 9,
        "nome": "Marcelo Oliveira",
        "email": "marcelo.oliveira@email.com",
        "celular": "91911111111",
        "telefone": "9122222222",
        "sn_favorito": "S",
        "sn_ativo": "N",
        "dh_cad": "2024-07-25T18:00:00Z"
      },
      {
        "id": 10,
        "nome": "Camila Santos",
        "email": "camila.santos@email.com",
        "celular": "12987654321",
        "telefone": "1234567890",
        "sn_favorito": "N",
        "sn_ativo": "S",
        "dh_cad": "2024-07-25T19:00:00Z"
      },
        {
        "id": 11,
        "nome": "Bruno Pereira",
        "email": "bruno.pereira@email.com",
        "celular": "13998765432",
        "telefone": "1345678901",
        "sn_favorito": "S",
        "sn_ativo": "S",
        "dh_cad": "2024-07-25T20:00:00Z"
      },
      {
        "id": 12,
        "nome": "Isabela Martins",
        "email": "isabela.martins@email.com",
        "celular": "14987654321",
        "telefone": "1456789012",
        "sn_favorito": "N",
        "sn_ativo": "N",
        "dh_cad": "2024-07-25T21:00:00Z"
      },
      {
        "id": 13,
        "nome": "Rafael Lima",
        "email": "rafael.lima@email.com",
        "celular": "15976543210",
        "telefone": "1567890123",
        "sn_favorito": "S",
        "sn_ativo": "S",
        "dh_cad": "2024-07-25T22:00:00Z"
      },
      {
        "id": 14,
        "nome": "Patricia Costa",
        "email": "patricia.costa@email.com",
        "celular": "16965432109",
        "telefone": "1678901234",
        "sn_favorito": "N",
        "sn_ativo": "S",
        "dh_cad": "2024-07-25T23:00:00Z"
      },
      {
        "id": 15,
        "nome": "Gustavo Souza",
        "email": "gustavo.souza@email.com",
        "celular": "17954321098",
        "telefone": "1789012345",
        "sn_favorito": "S",
        "sn_ativo": "N",
        "dh_cad": "2024-07-26T00:00:00Z"
      },
      {
        "id": 16,
        "nome": "Aline Ferreira",
        "email": "aline.ferreira@email.com",
        "celular": "18943210987",
        "telefone": "1890123456",
        "sn_favorito": "N",
        "sn_ativo": "S",
        "dh_cad": "2024-07-26T01:00:00Z"
      },
      {
        "id": 30,
        "nome": "Zilda Pereira",
        "email": "zilda.pereira@email.com",
        "celular": "11987654321",
        "telefone": "1123456789",
        "sn_favorito": "S",
        "sn_ativo": "S",
        "dh_cad": "2024-07-27T10:00:00Z"
      },
      {
        "id": 31,
        "nome": "Afonso Martins",
        "email": "afonso.martins@email.com",
        "celular": "21976543210",
        "telefone": "2134567890",
        "sn_favorito": "N",
        "sn_ativo": "S",
        "dh_cad": "2024-07-27T11:00:00Z"
      },
      {
        "id": 32,
        "nome": "Bárbara Oliveira",
        "email": "barbara.oliveira@email.com",
        "celular": "31965432109",
        "telefone": "3145678901",
        "sn_favorito": "S",
        "sn_ativo": "N",
        "dh_cad": "2024-07-27T12:00:00Z"
      },
      {
        "id": 33,
        "nome": "César Santos",
        "email": "cesar.santos@email.com",
        "celular": "41954321098",
        "telefone": "4156789012",
        "sn_favorito": "N",
        "sn_ativo": "S",
        "dh_cad": "2024-07-27T13:00:00Z"
      },
      {
        "id": 34,
        "nome": "Débora Ferreira",
        "email": "debora.ferreira@email.com",
        "celular": "51943210987",
        "telefone": "5167890123",
        "sn_favorito": "S",
        "sn_ativo": "S",
        "dh_cad": "2024-07-27T14:00:00Z"
      },
      {
        "id": 35,
        "nome": "Eduardo Rodrigues",
        "email": "eduardo.rodrigues@email.com",
        "celular": "61932109876",
        "telefone": "6178901234",
        "sn_favorito": "N",
        "sn_ativo": "N",
        "dh_cad": "2024-07-27T15:00:00Z"
      },
      {
        "id": 36,
        "nome": "Fabiana Almeida",
        "email": "fabiana.almeida@email.com",
        "celular": "71921098765",
        "telefone": "7189012345",
        "sn_favorito": "S",
        "sn_ativo": "S",
        "dh_cad": "2024-07-27T16:00:00Z"
      },
      {
        "id": 37,
        "nome": "Gustavo Silva",
        "email": "gustavo.silva@email.com",
        "celular": "81910987654",
        "telefone": "8190123456",
        "sn_favorito": "N",
        "sn_ativo": "S",
        "dh_cad": "2024-07-27T17:00:00Z"
      },
      {
        "id": 38,
        "nome": "Helena Oliveira",
        "email": "helena.oliveira@email.com",
        "celular": "91909876543",
        "telefone": "9101234567",
        "sn_favorito": "S",
        "sn_ativo": "N",
        "dh_cad": "2024-07-27T18:00:00Z"
      },
      {
        "id": 39,
        "nome": "Ítalo Santos",
        "email": "italo.santos@email.com",
        "celular": "12908765432",
        "telefone": "1212345678",
        "sn_favorito": "N",
        "sn_ativo": "S",
        "dh_cad": "2024-07-27T19:00:00Z"
      },
      {
        "id": 40,
        "nome": "Júlia Ferreira",
        "email": "julia.ferreira@email.com",
        "celular": "13987654321",
        "telefone": "1323456789",
        "sn_favorito": "S",
        "sn_ativo": "S",
        "dh_cad": "2024-07-27T20:00:00Z"
      },
      {
        "id": 41,
        "nome": "Kauan Rodrigues",
        "email": "kauan.rodrigues@email.com",
        "celular": "14976543210",
        "telefone": "1434567890",
        "sn_favorito": "N",
        "sn_ativo": "N",
        "dh_cad": "2024-07-27T21:00:00Z"
      },
      {
        "id": 42,
        "nome": "Laura Almeida",
        "email": "laura.almeida@email.com",
        "celular": "15965432109",
        "telefone": "1545678901",
        "sn_favorito": "S",
        "sn_ativo": "S",
        "dh_cad": "2024-07-27T22:00:00Z"
      },
      {
        "id": 43,
        "nome": "Miguel Silva",
        "email": "miguel.silva@email.com",
        "celular": "16954321098",
        "telefone": "1656789012",
        "sn_favorito": "N",
        "sn_ativo": "S",
        "dh_cad": "2024-07-27T23:00:00Z"
      },
      {
        "id": 44,
        "nome": "Natália Oliveira",
        "email": "natalia.oliveira@email.com",
        "celular": "17943210987",
        "telefone": "1767890123",
        "sn_favorito": "S",
        "sn_ativo": "N",
        "dh_cad": "2024-07-28T00:00:00Z"
      },
      {
        "id": 45,
        "nome": "Otávio Santos",
        "email": "otavio.santos@email.com",
        "celular": "18932109876",
        "telefone": "1878901234",
        "sn_favorito": "N",
        "sn_ativo": "S",
        "dh_cad": "2024-07-28T01:00:00Z"
      },
  ]
  }
  constructor() { }

  getContactsLarge() {
    return Promise.resolve(this.getData());
}

}
