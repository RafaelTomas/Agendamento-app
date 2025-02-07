import { Component, inject, TemplateRef } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { faPlus,faPenToSquare, faStar, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacts',
  imports: [HeaderComponent,FontAwesomeModule, NgbTooltipModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  FaPlus =  faPlus;
  FaPenToSquare = faPenToSquare;
  FaStar = faStar;
  FaTrash = faTrash;
  FaSearch = faSearch

  constructor(private modalService: NgbModal){}

  open(content:any) {
    console.log("CLICOU")
		this.modalService.open(content)
	}
}
