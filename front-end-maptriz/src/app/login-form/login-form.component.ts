import { Component, OnInit} from '@angular/core';
import { User } from 'src/shared/models/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  constructor(private services: UserService, private router: Router) { }
  
  ngOnInit(): void {
  }
  state: boolean = false;
  email: string = "";
  name: string = "";
  password: string = "";
  confirm: string = "";

  handleSubmit() {
    let user: User = new User(null, this.name, this.email, this.password, null);
    if(!this.state) {
      this.services.login(user).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['contacts', data.id]);
      });
    } else {
      this.services.saveUser(user).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['contacts'])
      })
    }
  }

  toggleState() {
    this.state = !this.state;
  }

}
