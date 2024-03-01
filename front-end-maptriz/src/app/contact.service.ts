import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/shared/models/contact';

const url: string = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContact(id: string) {
    return this.http.get(url + '/contact/' + id);
  }

  getContacts(id: string) {
    return this.http.get(url + '/contact/list/' + id);
  }

  createContact(contact: Contact) {
    return this.http.post(url + '/contact/create', contact);
  }

  update(contact: Contact) {
    return this.http.post(url + '/contact/update', contact);
  }
}
