import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Contact } from 'src/shared/models/contact';
import { LocalStorageService } from '../local-storage.service';
import { User } from 'src/shared/models/user';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() contact: any = new Contact(null, "", null, "", null, null, null, null, null, null, null, null, null);
  @Output() contactChange = new EventEmitter<any>();

  deleteState: boolean = false;

  constructor(
    private services: ContactService, 
    private route: ActivatedRoute, 
    private router: Router,
    private storageServices: LocalStorageService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let userId = this.storageServices.getItem('userId');
      if(!userId) this.router.navigate(['login']);

      let id = params.get('id');
      if(id) {
        this.services.getContact(id).subscribe((contact: any) => {
          this.contact = contact;
        })
      } else {
        let user = new User(Number(userId), null, null, null);
        this.contact = new Contact(null, "", null, "", null, null, null, null, null, null, null, null, user)
      }
    })
  }

  updateContact(contact: any) {
    this.contact = contact;
    this.contactChange.emit(this.contact);
  }

  handleRemove() {
    if(this.deleteState) {
      this.services.removeContact(this.contact.id).subscribe(() => {
        this.router.navigate(['contacts']);
      });
    } else {
      this.deleteState = !this.deleteState;
    }
  }

  handleReturn() {
    this.router.navigate(['contacts']);
  }

  handleSave() {
    this.services.createContact(this.contact).subscribe(() => {
      this.router.navigate(['contacts']);
    });
  }

}
