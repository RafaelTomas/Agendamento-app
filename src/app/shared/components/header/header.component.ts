import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowRightFromBracket
 } from '@fortawesome/free-solid-svg-icons';
 import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, NgbTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  FaArrowRightFromBracket =  faArrowRightFromBracket;
}
