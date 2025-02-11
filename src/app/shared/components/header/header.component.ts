import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowRightFromBracket
 } from '@fortawesome/free-solid-svg-icons';
 import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../core/guards/auth.service';


@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, NgbTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [AuthService]
})
export class HeaderComponent {
  FaArrowRightFromBracket =  faArrowRightFromBracket;

  constructor(readonly authService: AuthService){}

  logout(){
    this.authService.logout()
  }
}
