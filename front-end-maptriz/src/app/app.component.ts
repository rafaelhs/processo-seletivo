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


  constructor() {
  }

  ngOnInit(): void {
  }

  filterApp : any;
}
