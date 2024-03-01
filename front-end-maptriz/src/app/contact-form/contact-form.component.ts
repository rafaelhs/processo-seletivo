import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from 'src/shared/models/contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() contact: any = new Contact(null, "", null, "", null, null, null, null, null, null, null, null, null);
  @Output() contactChange = new EventEmitter<any>();


  
  constructor(private services: ContactService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if(id) {
        this.services.getContact(id).subscribe((contact: any) => {
          this.contact = contact;
          console.log(this.contact)
        })
      }
    })
  }

  updateContact(contact: any) {
    this.contact = contact;
    this.contactChange.emit(this.contact);
  }

}
