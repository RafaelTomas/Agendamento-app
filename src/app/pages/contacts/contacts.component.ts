import { Component, ViewChild
} from '@angular/core';
import { ContactsService } from '../../shared/service/contacts.service';
import { faPlus,faPenToSquare, faStar, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ImportsModule } from './imports';
import { Table } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';



interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-contacts',
  imports: [ImportsModule,ToggleButtonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
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
  titleModal = '';

  cols!: Column[];
  contacts!: any[];

  constructor(private contactsService: ContactsService){}

  ngOnInit() {
    this.cols = [
      { field: 'sn_favorito', header: 'Favorito' },
      { field: 'nome', header: 'Nome' },
      { field: 'email', header: 'Email' },
      { field: 'celular', header: 'Celular' },
      { field: 'telefone', header: 'Telefone' },
      { field: 'acao', header: '' },
  ];
  this.contactsService.getContactsLarge().then((contacts) => {
    this.contacts = contacts;
    this.loading = false;
  });
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  showDialog(data?: any) {
    if(!data){
      this.createContact();
    }
    console.log(this.visible);
  }

  createContact(){
    this.titleModal =  'Adicione um contato';
    this.visible = true;
    console.log(this.visible)
  }

  closeModal(event: any){
    this.visible = event;
  }


}
