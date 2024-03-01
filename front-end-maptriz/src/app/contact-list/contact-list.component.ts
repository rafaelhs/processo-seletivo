import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/shared/models/contact';
import { ContactService } from '../contact.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contactList: Contact[] = [];
  @Output() contactListChange = new EventEmitter<any[]>();

  constructor(private services: ContactService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if(id) {
        this.services.getContacts(id).subscribe((contacts: any) => {
          this.contactList = contacts;
        });
      }
    })
  }

  updateContactList(contactList: any[]) {
    this.contactList = contactList;
    this.contactListChange.emit(this.contactList);
  }


}
