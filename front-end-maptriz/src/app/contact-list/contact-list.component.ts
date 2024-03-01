import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/shared/models/contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contactList: Contact[] = [];
  @Output() contactListChange = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit(): void {
  }

  updateContactList(contactList: any[]) {
    this.contactList = contactList;
    this.contactListChange.emit(this.contactList);
  }


}
