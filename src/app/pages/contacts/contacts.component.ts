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
  isModalDelete = false;
  dataForEdit: any;
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
    this.contacts = contacts.sort((a, b) => {
      if (a.sn_favorito === 'S' && b.sn_favorito !== 'S') {
        return -1;
      } else if (a.sn_favorito !== 'S' && b.sn_favorito === 'S') {
        return 1;
      } else {
        return 0;
      }
    });
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
    if(data){
      this.dataForEdit = data;
      this.editContact();
    }
  }

  editContact(){
    this.titleModal =  'Edite seu contato';
    this.visible = true;
  }

  createContact(){
    this.titleModal =  'Adicione um contato';
    this.visible = true;
  }

  closeModal(event: any){
    this.visible = event;
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

  contactDelete(data: any){
    console.log(data);
    this.isModalDelete = true;
  }
}
