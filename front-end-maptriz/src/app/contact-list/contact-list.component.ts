import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/shared/models/contact';
import { ContactService } from '../contact.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { User } from 'src/shared/models/user';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contactList: Contact[] = [];
  @Output() contactListChange = new EventEmitter<any[]>();

  constructor(
    private services: ContactService, 
    private storageServices: LocalStorageService) { 
      let userId = this.storageServices.getItem('userId');
      
      if(userId) {
        this.services.getContacts(userId).subscribe((contacts: any) => {
          console.log(contacts)
          this.contactList = contacts;
        });
      }
    }

  ngOnInit(): void {
   
  }

  updateContactList(contactList: any[]) {
    this.contactList = contactList;
    this.contactListChange.emit(this.contactList);
  }


}
