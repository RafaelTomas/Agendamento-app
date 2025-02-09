import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { ImportsModule } from './imports';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ContactsService } from '../../shared/service/contacts.service';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsComponent, ImportsModule, NgxMaskDirective],
      providers: [provideNgxMask()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
