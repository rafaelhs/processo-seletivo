import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: any;
  @Output() contactChange = new EventEmitter<any>();

  
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

  updateContact(contact: any) {
    this.contact = contact;
    this.contactChange.emit(this.contact);
  }

  handleClick() {
    this.router.navigate(['contact', this.contact.id]);
  }

}
