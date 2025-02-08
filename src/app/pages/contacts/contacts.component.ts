import { Component, ViewChild
} from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPlus,faPenToSquare, faStar, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ContactsService } from '../../shared/service/contacts.service';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-contacts',
  imports: [CommonModule, HeaderComponent,FontAwesomeModule, TableModule, IconFieldModule, InputIconModule],
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
  cols!: Column[];
  contacts!: any[];

  constructor(private modalService: NgbModal, private contactsService: ContactsService){}

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'email', header: 'Email' },
      { field: 'celular', header: 'Celular' },
      { field: 'telefone', header: 'Telefone' }
  ];
  this.contactsService.getContactsLarge().then((contacts) => {
    this.contacts = contacts
    this.loading = false;
  });
  }

  open(content:any) {
    console.log("CLICOU")
		this.modalService.open(content)
	}
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
