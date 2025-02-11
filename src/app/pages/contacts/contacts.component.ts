import { Component, ViewChild
} from '@angular/core';
import { ContactsService } from '../../shared/service/contacts.service';
import { faPlus,faPenToSquare, faStar, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ImportsModule } from './imports';
import { Table } from 'primeng/table';
import { Contatcs } from '../../shared/types/contacts.types';
import { MessageService } from 'primeng/api';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-contacts',
  imports: [ImportsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
  providers: [MessageService]
})
export class ContactsComponent {
  @ViewChild('dt') dt: Table | undefined;
  FaPlus =  faPlus;
  FaPenToSquare = faPenToSquare;
  FaStar = faStar;
  FaTrash = faTrash;
  FaSearch = faSearch;
  loading = true;
  visible = false;
  isModalDelete = false;
  dataForEdit!: any;
  titleModal = '';


  cols!: Column[];
  contacts!: any[];
  deleteContent: any;

  constructor(private contactsService: ContactsService, private messageService: MessageService){}

  ngOnInit() {
    this.cols = [
      { field: 'favorito', header: 'Favorito' },
      { field: 'nome', header: 'Nome' },
      { field: 'email', header: 'Email' },
      { field: 'celular', header: 'Celular' },
      { field: 'telefone', header: 'Telefone' },
      { field: 'acao', header: '' },
    ];
    this.getListContacts();
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  getListContacts(){
    this.contactsService.getContacts().subscribe({
      next: (data: any) => {
        this.contacts = data.sort((a: any, b: any) => {
          if (a.favorito === 'S' && b.favorito !== 'S') {
            return -1;
          } else if (a.favorito !== 'S' && b.favorito === 'S') {
            return 1;
          } else {
            return 0;
          }
        });
        this.loading = false;
      }
    })
  }

  showDialog(data?: Contatcs) {
    if(!data){
      this.titleModal =  'Adicione um contato';
      this.visible = true;
    }
    if(data){
      this.titleModal =  'Edite seu contato';
      this.visible = true;
      this.dataForEdit = {...data, favorito: data.favorito === "S" ? true: false};
    }
  }

  editContact(data:Contatcs){
    this.contactsService.putContact(data).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Atualizado', detail: "Seu contato foi atualizado"  })
        this.getListContacts();
      },
      error: (e) => this.messageService.add({ severity: 'error', summary: 'Error', detail: e  })
  });
  }

  createContact(data: Contatcs){
    this.contactsService.postContact(data).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Criado', detail: "Seu contato foi criado"  })
        this.getListContacts();
      },
      error: (e) => this.messageService.add({ severity: 'error', summary: 'Error', detail: e  })
  });
  }

  closeModal(event: any){
    this.visible = event;
  }

  formData(event: any){
    if(!event.id){
      this.createContact(event);
    }
    if(event.id){
      this.editContact(event);
    }
  }

  formatNumber(value: string){
    if(value.length === 8){
      return `${value.slice(0, 4)}-${value.slice(4)}`;
    } else if( value.length === 11){
      return `(${value.slice(0, 2)})${value.slice(2, 7)}-${value.slice(7)}`;
    } else{
      return value;
    }
  }

  showModalDelete(data: any){
    this.isModalDelete = true;
    this.deleteContent = data;
  }

  contactDelete(){
    this.contactsService.deleteContact(this.deleteContent.id).subscribe({
      next: () => {
          this.deleteContent = {};
          this.getListContacts();
          this.isModalDelete = false;
          this.messageService.add({ severity: 'success', summary: 'Deletado', detail: 'Seu contato foi deletado'  });
      },
      error: (e) => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'e'  })
    })
  }


}
