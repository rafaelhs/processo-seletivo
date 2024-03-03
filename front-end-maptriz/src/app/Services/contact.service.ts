import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/shared/models/contact';
import { environment } from 'src/environments/environment';

const url: string = environment.baseUrl;

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

  removeContact(id: string) {
    return this.http.delete(url + '/contact/' + id);
  }

  searchContacts(id: String, search: string, variable: string, order: string) {
    return this.http.get(
      url + '/contact/search/' + id, 
      { params: { search, variable, order } 
      });
  }
}
