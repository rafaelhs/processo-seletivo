import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from 'src/shared/models/user';
import { EventService } from 'src/shared/services/EventService';
import { UserService } from './user.service';
import { Contact } from 'src/shared/models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'agenda';
  test: string = "ayy lmao";
  toggle: boolean = true;

  userList! : User[];

  contact: Contact = new Contact(1, "rafael", "hirata", "email@email.com", 
  4312121212, null, null, null, null, null, null, null, null);
  contactList: Contact[] = [
    new Contact(1, "rafael", "hirata", "email@email.com", 
    4312121212, null, null, null, null, null, null, null, null),
    new Contact(2, "rafael2", "hirata2", "email2@email.com", 
    4312121212, null, null, null, null, null, null, null, null),
    new Contact(3, "rafael3", "hirata3", "email3@email.com", 
    4312121212, null, null, null, null, null, null, null, null)
  ]



  constructor(events: EventService, private userService: UserService) {
    events.listen('removeUser', (user: User) => {
      console.log(user.email);
    })
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any) => {
        this.userList = data;
      });
  }

  filterApp : any;
}
