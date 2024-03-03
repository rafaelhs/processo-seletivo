import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/shared/models/contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contactList: Contact[] = [];
  @Output() contactListChange = new EventEmitter<any[]>();

  query: string = "";
  searchToggle: string = "createdAt";
  orderToggle: string = "ASC";

  constructor(
    private services: ContactService, 
    private storageServices: LocalStorageService,
    private router: Router) { 
      let userId = this.storageServices.getItem('userId');
      
      if(userId) {
        this.services.searchContacts(userId, "", "name", "ASC").subscribe((contacts: any) => {
          this.contactList = contacts.content;
        });
      } else {
        this.router.navigate(['login']);
      }
    }

  ngOnInit(): void {
   
  }

  updateContactList(contactList: any[]) {
    this.contactList = contactList;
    this.contactListChange.emit(this.contactList);
  }

  handleAdd() {
    this.router.navigate(['contact']);
  }

  handleSearch() {
    let userId = this.storageServices.getItem('userId');
    if(userId) {
      this.services.searchContacts(userId, this.query, this.searchToggle, this.orderToggle).subscribe((contacts: any) => {
        this.contactList = contacts.content;
      });
    }
  }

  handleSearchToggle(variable: string) {
    if(this.searchToggle != variable) {
      this.switchSearchToggle();
    } else {
      this.switchOderToggle();
    }
    this.handleSearch()
  }

  switchSearchToggle() {
    if(this.searchToggle === "createdAt") {
      this.searchToggle = "name";
    } else {
      this.searchToggle = "createdAt";
    }
    this.orderToggle = "ASC";
  }

  switchOderToggle() {
    if(this.orderToggle === "ASC") {
      this.orderToggle = "DESC";
    } else {
      this.orderToggle = "ASC";
    }
  }
}