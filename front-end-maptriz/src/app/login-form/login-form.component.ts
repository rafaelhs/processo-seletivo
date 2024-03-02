import { Component, OnInit} from '@angular/core';
import { User } from 'src/shared/models/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  constructor(
    private services: UserService, 
    private router: Router,
    private storageServices: LocalStorageService) { }
  
  ngOnInit(): void {
  }
  state: boolean = false;
  email: string = "";
  name: string = "";
  password: string = "";
  confirm: string = "";

  handleSubmit() {
    let user: User = new User(null, this.name, this.email, this.password);
    if(!this.state) {
      this.services.login(user).subscribe((data: any) => {
        this.storageServices.setItem('userId', data.id);
        this.router.navigate(['contacts']);
      });
    } else {
      this.services.saveUser(user).subscribe((data: any) => {
        this.storageServices.setItem('userId', data.id);
        this.router.navigate(['contacts'])
      })
    }
  }

  toggleState() {
    this.state = !this.state;
  }

}
