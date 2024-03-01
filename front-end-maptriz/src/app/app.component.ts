import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from 'src/shared/models/user';
import { EventService } from 'src/shared/services/EventService';
import { UserService } from './user.service';

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
